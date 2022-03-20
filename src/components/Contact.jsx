import React from 'react';

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/aa0908c1-6cec-4586-a2f7-924d8b032423"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            //
            以下のフォームを送信するか、直接にメールを送ってください -
            ksarvin04@gmail.com
          </p>
        </div>
        <input
          className=" bg-[#ccd6f6] p-2"
          type="text"
          placeholder="名前"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="メールアドレス"
          name="email"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          placeholder="メッセージ"
          name="message"
          rows="10"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          協力しよう!
        </button>
      </form>
    </div>
  );
}

export default Contact;
