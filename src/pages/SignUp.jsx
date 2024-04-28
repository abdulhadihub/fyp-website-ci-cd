import React from 'react';
import {
  Form,
  Input,
} from 'antd';
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
    // Handle Signup logic here
  };

  return (
    <div className="flex flex-row min-h-screen">
      {/* Left side */}
      <div className="hidden md:flex flex-col justify-center items-center text-white w-[50%] py-10 px-4">
        <img src="medicalcare.svg" alt="Sign up " className="mt-8 " />
      </div>

      {/* Right side */}
      <div className="flex flex-col bg-primary md:w-[50%] w-[100%] p-6 pt-4">
        {/* Language selection dropdown */}
        <div className="flex justify-between w-full mb-4">
          <div className="flex items-center"></div>
          <div className='text-[14px] text-white'>
            Already have an account? <Link to='/login' className="border-[1px] hover:bg-secondary inline-block border-white px-[10px] py-[3px] rounded-full font-[400px] text-[12px]">Log in</Link>
          </div>
        </div>

        {/* middle part */}
        <div className='flex justify-center items-center flex-grow'>
          <div>
            <div class="text-white flex text-[40px] font-bold my-4">
              Welcome!
            </div>
            <Form form={form} onFinish={onFinish} layout="vertical">
              <div className="flex flex-col items-center">
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: 'Please input your name!' }]}
                >
                  <Input className='text-primarylt w-[390px] rounded-full p-[10px]' size="large" placeholder="Your Name" prefix={<FaUserAlt className='mx-3' size={20} />} />
                </Form.Item>

                <Form.Item
                  name="email"
                  rules={[{ required: true, message: 'Please input your Email!', type: 'email'}]}
                >
                  <Input className='text-primarylt w-[390px] rounded-full p-[10px]' size="large" placeholder="Your Email" prefix={<MdEmail className='mx-3' size={22} />} />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                  <Input.Password className='text-primarylt w-[390px] rounded-full p-[10px]' size="large" placeholder="Create Password" prefix={<RiLockPasswordFill className='mx-3' size={22} />} />
                </Form.Item>

                <Form.Item
                  name="confirm"
                  dependencies={['password']}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                      },
                    }),
                  ]}
                >
                  <Input.Password className='text-primarylt w-[390px] rounded-full p-[10px]' size="large" placeholder="Confirm Password" prefix={<RiLockPasswordFill className='mx-3' size={22} />} />
                </Form.Item>


                <Form.Item>
                  <button  htmlType="submit" className="text-white my-3 border-[1px] bg-primarylt hover:bg-secondary px-4 w-[150px] font-[400px] py-2 rounded-full">
                    Sign Up
                  </button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;