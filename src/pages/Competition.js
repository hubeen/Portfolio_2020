import React from "react";
import Competite from "../components/Competite/Competite";
import "./Competition.scss";

const Competition = ({ datas }) => {
    return (
        <main className="main competition nes-container is-dark is-rounded">
            {datas &&
                datas.map((data, i) => {
                    return <Competite key={data.id || i} competite={data} />;
                })}
        </main>
    );
};

export default Competition;
Competition.defaultProps = {
    datas: [
        {
            title: "정보올림피아드 프로그래밍 부문 은상",
            date: "13.05.25"
        },
        {
            title: "제 1회 대한민국 SW융합 해카톤 대회 본선",
            date: "15.05.29~05.05.31"
        },
        {
            title: "YISF 2015 예선 27위 [CTF 첫 참가]",
            date: "15.8.9"
        },
        {
            title: "제 10회 중고생정보보호올림피아드 본선 참가",
            date: "15.10.16"
        },
        {
            title: "화이트햇 콘테스트 2015 청소년 부 Hackman팀 본선",
            date: "15.10.21"
        },
        {
            title: "Codegate Junior 2016 Final Round",
            date: "16.05.02"
        },
        {
            title: "제 1회 전국 청소년 화이트 해킹 공모전",
            date: "16.09.24"
        },
        {
            title: "제 11회 중고생정보보호올림피아드 본선 참가",
            date: "16.10.21"
        },
        {
            title: "기업연계 아이디어 제안 최우수상",
            date: "18.11.02"
        },
        {
            title: "E-브레인 페스티벌 장려상",
            date: "18.11.23"
        },
        {
            title: "한국정보기술학회 대학생 논문경진대회 동상",
            date: "18.11.30"
        },
        {
            title: "KNU 창업경진대회 장려상",
            date: "18.12.01"
        },
        {
            title: "창의적 교육 프로그램 체험수기 공모전 3위",
            date: "19.02.01"
        },
        {
            title: "창의적 교육 프로그램 체험수기 공모전 특별상",
            date: "19.02.01"
        },
    ]
};