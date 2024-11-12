import React from "react";
import Layout from "../components/Layout";
import ChatSupport from "../components/ChatSupport";

const Contact = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-niigata-800">お問い合わせ</h1>
        <div className="max-w-2xl mx-auto">
          <ChatSupport />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;