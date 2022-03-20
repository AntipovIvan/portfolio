import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl font-medium">
            <p className="leading-10">
              はじめまして、私はイワンです。
              どうぞ遠慮せずにご覧ください。
            </p>
          </div>
          <div>
            <p>
              私は周りの人々の生活を向上させるソフトウェアを構築することに情熱を注いでいます。
              将来的には、個人や中小企業から大企業まで向けのソフトウェアを作りたいと思っています。
              そして、フルスタックのスペシャリストになりたいと思います。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
