import React from "react";
import Activite from "../components/Activite/Activite";
import "./Activity.scss";

const Activity = ({ datas }) => {
    return (
        <main className="main activity nes-container is-dark is-rounded">
            {datas &&
                datas.map((data, i) => {
                    return <Activite key={data.id || i} activite={data} />;
                })}
        </main>
    );
};

export default Activity;
Activity.defaultProps = {
    datas: [
        {
            title: "RNH 프로그래밍 팀 운영",
            date: "13.07.13~15.05.03"
        },
        {
            title: "SW로 말해요 스플래시 참여",
            date: "15.03.21"
        },
        {
            title: "충청남도 장학생 선발",
            date: "15.06.25"
        },
        {
            title: "SecurityPlus SecurityPlus Students Academy(SSA) 대표",
            date: "16.01.04~17.03.02"
        },
        {
            title: "Hacking Camp 14th Speaker",
            date: "16.08.27~16.08.28"
        },
        {
            title: "NIMDA SECURITY 1th Speaker",
            date: "17.04.10"
        },
        {
            title: "Codegate 2017 Staff",
            date: "17.04.11~2017.04.13"
        },
        {
            title: "국민대학교 SW(프로그래밍, OSS등) 여름캠프 조교 참가",
            date: "17.07.27~2017.07.30"
        },
        {
            title: "2017 컨트리뷰톤 Gsharp팀 참가",
            date: "17.09.28~17.11.20"
        },
        {
            title: "[OSS개발자포럼&국민대학교]Git/GitHub 입문하기 Hands on Lab 조교 참가",
            date: "17.11.11"
        },
        {
            title: "KISA 해킹방어대회 취약점 세션(CTD : Capture the Drone) 교육 참가",
            date: "17.11.13"
        },
        {
            title: "2017 공개sw개발컨퍼런스 발표",
            date: "17.11.21"
        },
        {
            title: "교육기부프로그램 탄금중학교",
            date: "18.02.07~18.02.08"
        },
        {
            title: "NIMDA SECURITY 2th Speaker",
            date: "18.03.27"
        },
        {
            title: "Codegate 2018 Staff",
            date: "18.04.04~18.04.05"
        },
        {
            title: "공주대학교 캡스톤디자인(카카오톡을 이용한 언어교육 플랫폼) 참가",
            date: "18.05.31"
        },
        {
            title: "공주대학교 네트워크보안연구실 가입",
            date: "17.09.18"
        },
        {
            title: "교수지원학습센터 밀알두레 28기",
            date: "18.10.17"
        },
        {
            title: "기업연계 아이디어 제안 발표",
            date: "18.11.02"
        },
        {
            title: "OSS개발자포럼 Git/Github 심화 조교 참가",
            date: "18.11.10"
        },
        {
            title: "E-브레인 페스티벌 발표",
            date: "18.11.22"
        },
        {
            title: "다빈치창의융합연구소 인턴",
            date: "19.01.09~19.02"
        },
        {
            title: "KNU 창업경진대회",
            date: "18.11.30"
        },
        {
            title: "수기공모전 및 특허창출 캠프",
            date: "19.01.30 ~ 19.02.01"
        },
        {
            title: "교육기부 프로그램 온양여자중학교",
            date: "19.06.28"
        }
    ]
};