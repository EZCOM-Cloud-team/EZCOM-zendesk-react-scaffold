import React, { useEffect } from "react";
import client from "./zafClient";

export const App = () => {
	client.on("ticket.conversation.changed", (data) => {
		const ticketLog = data;

		const lastUserMessage = findLastMessage(ticketLog, "end-user");
		const lastAgentMessage = findLastMessage(ticketLog, ["agent", "admin"]);

		if (lastAgentMessage) {
			const messageTimestamp = new Date(lastAgentMessage.timestamp); // 메시지의 타임스탬프를 Date 객체로 변환
			const currentTime = new Date(); // 현재 시간을 가져옴
			const timeDifference = (currentTime - messageTimestamp) / (1000 * 60); // 시간 차이를 분 단위로 계산

			sendKakaotalk();
			if (timeDifference > 1) {
				alert("마지막 agent 메시지를 받은 지 1분이 지났습니다.");
			} else {
				// sendKakaotalk();
				// const remainingTime = 1 - timeDifference;
				// setTimeout(() => {}, remainingTime * 60 * 1000); // 남은 시간에 대해 타이머 설정
			}
		} else {
			console.log("agent의 메시지가 없습니다.");
		}
	});

	function findLastMessage(conversations, roles) {
		for (let i = conversations.length - 1; i >= 0; i--) {
			if (roles.includes(conversations[i].author.role)) {
				return conversations[i];
			}
		}
	}

	async function getRequesterData() {
		const response = await client.get("ticket.requester");
		return response;
	}

	function findPhoneNumber(identities) {
		const phoneNum = identities.filter((id) => id.type === "phone_number");
		console.log(phoneNum);
		return phoneNum;
	}

	async function sendKakaotalk() {
		const requesterData = await client.get("ticket.requester");
		const requesterPhoneNum = findPhoneNumber(requesterData["ticket.requester"].identities)[0].value;
		const requesterName = requesterData["ticket.requester"].name;
		const requesterEmail = requesterData["ticket.requester"].email;

		console.log(requesterPhoneNum, requesterName, requesterEmail);

		const response = await client.request({
			url: "https://desk.matrixcloud.kr/matrixIpcc/G001/ext-api/sms-sending/v1",
			type: "POST",
			headers: {
				"external-access-key": "472D4B6150645367556B587032733576",
			},
			data: {
				center: "ezcom",
				userid: null,
				email: "enmei910@ezcom.co.kr",
				templateId: 53,
				receiveNumber: requesterPhoneNum,
				replaceVariable: {
					고객명: requesterName,
					이메일: requesterEmail,
				},
				smsType: "KAKAO",
				webhook: "zendesk",
				webhookParams: null,
				serverGroup: "G001",
			},
		});

		console.log(response);
	}

	useEffect(() => {
		const fetch = async () => {
			await sendKakaotalk();
		};

		// fetch();
		client.get("ticket.assignee").then((data) => console.log(data));
	}, []);

	return <div className="flex items-center justify-center text-lg">Welcome To React Scaffold</div>;
};
