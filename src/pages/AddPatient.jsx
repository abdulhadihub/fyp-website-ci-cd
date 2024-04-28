import React, { useState } from 'react';
import { Form, Input, Select, DatePicker, Button, Row, Col } from 'antd';
import { IoAdd } from 'react-icons/io5';
import DataFormEEG from '../components/DataFormEEG';

const { Option } = Select;

const AddPatient = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values:', values);
        // Handle form submission logic here (e.g., save to database)
    };

    return (
        <div className="sm:m-9 m-2">
            <DataFormEEG />
            <div className='flex justify-between bg-gray-100 items-center p-2 mb-2 rounded-md'>
                <h1 className="text-2xl font-semibold text-center text-primary ">Add New Patient</h1>
            </div>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
            >
                <Row gutter={16}>
                    <Col xs={24} sm={12}>
                        <Form.Item
                            label="Full Name"
                            name="fullName"
                            rules={[{ required: true, message: 'Please enter full name' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Form.Item
                            label="Date of Birth"
                            name="dob"
                            rules={[{ required: true, message: 'Please select date of birth' }]}
                        >
                            <DatePicker style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={12}>
                        <Form.Item
                            label="Gender"
                            name="gender"
                            rules={[{ required: true, message: 'Please select gender' }]}
                        >
                            <Select>
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Form.Item
                            label="Born Country"
                            name="bornCountry"
                            rules={[{ required: true, message: 'Please enter born country' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={12}>
                        <Form.Item
                            label="Born City"
                            name="bornCity"
                            rules={[{ required: true, message: 'Please enter born city' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Form.Item
                            label="Mother Name"
                            name="motherName"
                            rules={[{ required: true, message: 'Please enter mother name' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={12}>
                        <Form.Item
                            label="Mother CNIC"
                            name="motherCnic"
                            rules={[{ required: true, message: 'Please enter mother CNIC' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Form.Item
                            label="Father Name"
                            name="fatherName"
                            rules={[{ required: true, message: 'Please enter father name' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={12}>
                        <Form.Item
                            label="Father CNIC"
                            name="fatherCnic"
                            rules={[{ required: true, message: 'Please enter father CNIC' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Form.Item
                            label="Address"
                            name="address"
                            rules={[{ required: true, message: 'Please enter address' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={12}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Form.Item
                            label="Phone"
                            name="phone"
                            rules={[{ required: true, message: 'Please enter phone number' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            label="About"
                            name="about"
                            rules={[{ required: true, message: 'Please enter about' }]}
                        >
                            <Input.TextArea />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item className='flex justify-end'>
                    <Button icon={<IoAdd />} className="bg-primary" type="primary" htmlType="submit">
                        Add Patient
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AddPatient;
