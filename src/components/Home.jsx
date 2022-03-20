import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 ">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Antipov Ivan
        </h1>
        <h1 className="text-4xl my-2 sm:text-7xl font-bold text-[#ccd6f6]">
          (アンテイポウ　イワン)
        </h1>
        <h2 className="text-4x sm:text-7xl font-bold text-[#8892b0]">
          日本電子専門学校の学生です
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          デジタルエクスペリエンスの構築を専門とするフロントエンド開発者です。
          現在、私はフルスタック開発者になりため動力して、レスポンシブフルスタックWebアプリケーションを構築することに重点を置いています。
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              作品を見る
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
