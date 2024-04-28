import React, { useState } from 'react'
import { Space, Table, Select, Avatar, Tag, Modal, Button, Form, Input, Steps, DatePicker, Card, Divider } from 'antd';
import { HiOutlineDocumentText } from "react-icons/hi";
import { IoAdd } from 'react-icons/io5';
import { AiOutlineEye } from 'react-icons/ai';
import { RxCross1 } from "react-icons/rx";
import { FaUserCheck, FaUserSecret } from 'react-icons/fa';
import { UserOutlined } from '@ant-design/icons';
import { FiDelete, FiUpload } from 'react-icons/fi';
import { LuDelete } from 'react-icons/lu';
import { MdDelete } from 'react-icons/md';


const { Option } = Select;
const { Search } = Input;
const { Step } = Steps;
const PredictedDocuments = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();
    const [fileName, setFileName] = useState('');
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});

    const handleNext = async () => {
        try {
            const values = await form.validateFields();
            setFormData({ ...formData, ...values });
            setCurrentStep(currentStep + 1);
        } catch (error) {
            console.log('Validation failed:', error);
        }
    };

    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };
    const handleSubmit = async () => { }
    const handleFileChange = (info) => {
        if (info.file) {
            const format = info.file.name.split('.').pop().toUpperCase();
            form.setFieldsValue({
                documentFormat: format,
                fileName: info.file.name,
            });
            setFileName(info.file.name);
        }
    };

    const handleAddDocument = (values) => {
        // Your logic to handle adding the document
        console.log('Adding document:', values);
        setIsModalOpen(false);
    };
    //eslint-disable-next-line
    const [data, setData] = useState([
        {
            key: '1',
            patient: {
                name: 'John Doe',
                patientId: '1',
            },
            doctor: {
                name: 'Dr. John Doe',
                image: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
            },
            documentType: 'Prescription',
            format: 'PDF',
        },
        {
            key: '2',
            patient: {
                name: 'Ayesha Riaz',
                patientId: '2',
            },
            doctor: {
                name: 'Dr. John Doe',
                image: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
            },
            documentType: 'Prescription',
            format: 'PDF',
        },
        {
            key: '3',
            patient: {
                name: 'Ali Khan',
                patientId: '3',
            },
            doctor: {
                name: 'Dr. Sarah Jones',
                image: 'https://example.com/doctor-images/sarah-jones.jpg' // Replace with actual image URL
            },
            documentType: 'Lab Report',
            format: 'PDF'
        },
        {
            key: '4',
            patient: {
                name: 'Fatima Ahmed',
                patientId: '4',
            },
            doctor: {
                name: 'Dr. Michael Lee',
                image: 'https://example.com/doctor-images/michael-lee.jpg' // Replace with actual image URL
            },
            documentType: 'Referral',
            format: 'PDF'
        },
        {
            key: '5',
            patient: {
                name: 'David Miller',
                patientId: '5',
            },
            doctor: {
                name: 'Dr. Aïsha Benali',
                image: 'https://example.com/doctor-images/aisha-benali.jpg' // Replace with actual image URL
            },
            documentType: 'Discharge Summary',
            format: 'PDF'
        },
        {
            key: '6',
            patient: {
                name: 'Li Wang',
                patientId: '6',
            },
            doctor: {
                name: 'Dr. Kai Tanaka',
                image: 'https://example.com/doctor-images/kai-tanaka.jpg' // Replace with actual image URL
            },
            documentType: 'Progress Notes',
            format: 'TXT'
        },
        {
            key: '7',
            patient: {
                name: 'Maria Garcia',
                patientId: '7',
            },
            doctor: {
                name: 'Dr. Maria Garcia',
                image: 'https://example.com/doctor-images/maria-garcia.jpg' // Replace with actual image URL
            },
            documentType: 'Prescription',
            format: 'PDF'
        },
        {
            key: '8',
            patient: {
                name: 'Omar Hassan',
                patientId: '8',
            },
            doctor: {
                name: 'Dr. Omar Hassan',
                image: 'https://example.com/doctor-images/omar-hassan.jpg' // Replace with actual image URL
            },
            documentType: 'Lab Report',
            format: 'PDF'
        },
        {
            key: '9',
            patient: {
                name: 'Isabelle Dubois',
                patientId: '9',
            },
            doctor: {
                name: 'Dr. Isabelle Dubois',
                image: 'https://example.com/doctor-images/isabelle-dubois.jpg' // Replace with actual image URL
            },
            documentType: 'Referral',
            format: 'PDF'
        },
        {
            key: '10',
            patient: {
                name: 'Alexei Petrov',
                patientId: '10',
            },
            doctor: {
                name: 'Dr. Alexei Petrov',
                image: 'https://example.com/doctor-images/alexei-petrov.jpg' // Replace with actual image URL
            },
            documentType: 'Discharge Summary',
            format: 'PDF'
        },
        {
            key: '11',
            patient: {
                name: 'Aisha Mohammed',
                patientId: '11',
            },
            doctor: {
                name: 'Dr. Aisha Mohammed',
                image: 'https://example.com/doctor-images/aisha-mohammed.jpg' // Replace with actual image URL
            },
            documentType: 'Progress Notes',
            format: 'TXT'
        },
        {
            key: '12',
            patient: {
                name: 'Kimiko Tanaka',
                patientId: '12',
            },
            doctor: {
                name: 'Dr. Kimiko Tanaka',
                image: 'https://example.com/doctor-images/kimiko-tanaka.jpg' // Replace with actual image URL
            },
            documentType: 'Prescription',
            format: 'PDF'
        },
    ]);

    const columns = [
        {
            title: 'PATIENT ID',
            render: (_, record) => (
                <Space>
                    <span>{record?.patient?.patientId}</span>
                </Space>
            ),
        },
        {
            title: 'PATIENT Name',
            render: (_, record) => (
                <Space>
                    <span>{record?.patient?.name}</span>
                </Space>
            ),
        },

        {
            title: 'DOCTOR',
            dataIndex: 'doctor',
            render: (_, record) => (
                <Space>
                    <Avatar src={record?.doctor?.image} />
                    <span className='capitalize'>{record?.doctor?.name}</span>
                </Space>
            ),
        },
        {
            title: 'DOCUMENT TYPE',
            dataIndex: 'documentType',
            render: (_, record) => (
                <Space>
                    <HiOutlineDocumentText size={25} color="grey" />
                    <span className='capitalize'>{record.documentType}</span>
                </Space>
            ),
        },
        {
            title: 'FORMAT',
            render: (_, record) => (
                <Tag color='#0062FF'>
                    <span className='capitalize'>{record.format}</span>
                </Tag>
            ),
        },
        {
            title: 'DATE',
            render: (_, record) => (
                <Space>
                    <span className='capitalize'>{new Date().toLocaleDateString()}</span>
                </Space>

            ),
        },
        {
            title: 'ACTIONS',
            key: "actions",
            render: (_, record) => (
                <Space className='cursor-pointer'>
                    <AiOutlineEye onClick={() => alert(record?.id)} size={25} style={{ color: "grey" }} />
                </Space>
            ),
        },
    ];
    const [allPatients, setAllPatients] = useState([
        {
            id: 1,
            name: 'John Doe',
            fatherName: "Father Doe",
            motherName: "Mother Doe",
            gender: "Male",
            dateOfBirth: "01-01-2000",
            birthCity: "Lahore",
            birthCountry: "Pakistan",
            status: "admitted"
        },
        {
            id: 2,
            name: 'Rahul Kumar',
            fatherName: "Father Kumar",
            motherName: "Mother Kumar",
            gender: "Male",
            dateOfBirth: "01-01-2000",
            birthCity: "Delhi",
            birthCountry: "India",
            status: "Recovering"
        },
        {
            id: 3,
            name: 'Sara Doe',
            fatherName: "Father Doe",
            motherName: "Mother Doe",
            gender: "Female",
            dateOfBirth: "01-01-2000",
            birthCity: "Lahore",
            birthCountry: "Pakistan",
            status: "recovered"
        },
        {
            id: 4,
            name: 'Ayesha Riaz',
            fatherName: "Father Riaz",
            motherName: "Mother Riaz",
            gender: "Female",
            dateOfBirth: "01-01-2000",
            birthCity: "Karachi",
            birthCountry: "Pakistan",
            status: "critical"
        },
        {
            id: 5,
            name: 'Ali Khan',
            fatherName: "Father Khan",
            motherName: "Mother Khan",
            gender: "Male",
            dateOfBirth: "01-01-2000",
            birthCity: "Lahore",
            birthCountry: "Pakistan",
            status: "admitted"
        },
        {
            id: 6,
            name: "Fatima Ahmed",
            fatherName: "Ahmed Ali",
            motherName: "Aisha Khan",
            gender: "Female",
            dateOfBirth: "15-08-1998",
            birthCity: "Islamabad",
            birthCountry: "Pakistan",
            status: "discharged"
        },
        {
            id: 7,
            name: "David Miller",
            fatherName: "Michael Miller",
            motherName: "Sarah Jones",
            gender: "Male",
            dateOfBirth: "22-10-1985",
            birthCity: "London",
            birthCountry: "United Kingdom",
            status: "recovered"
        },
        {
            id: 8,
            name: "Li Wang",
            fatherName: "Zhang Wang",
            motherName: "Mei Li",
            gender: "Male",
            dateOfBirth: "03-05-2003",
            birthCity: "Beijing",
            birthCountry: "China",
            status: "admitted"
        },
        {
            id: 9,
            name: "Maria Garcia",
            fatherName: "Pedro Garcia",
            motherName: "Isabella Lopez",
            gender: "Female",
            dateOfBirth: "21-12-1972",
            birthCity: "Madrid",
            birthCountry: "Spain",
            status: "discharged"
        },
        {
            id: 10,
            name: "Omar Hassan",
            fatherName: "Hassan Mohammed",
            motherName: "Fatima Ibrahim",
            gender: "Male",
            dateOfBirth: "07-02-2012",
            birthCity: "Cairo",
            birthCountry: "Egypt",
            status: "stable"
        },
        {
            id: 11,
            name: "Isabelle Dubois",
            fatherName: "Jean Dubois",
            motherName: "Marie Dupont",
            gender: "Female",
            dateOfBirth: "18-06-1990",
            birthCity: "Paris",
            birthCountry: "France",
            status: "recovered"
        },
        {
            id: 12,
            name: "Alexei Petrov",
            fatherName: "Ivan Petrov",
            motherName: "Natalia Petrova",
            gender: "Male",
            dateOfBirth: "09-09-1965",
            birthCity: "Moscow",
            birthCountry: "Russia",
            status: "discharged"
        },
        {
            id: 13,
            name: "Aisha Mohammed",
            fatherName: "Mohammed Ali",
            motherName: "Fatima Hassan",
            gender: "Female",
            dateOfBirth: "25-03-2007",
            birthCity: "Riyadh",
            birthCountry: "Saudi Arabia",
            status: "stable"
        },
        {
            id: 14,
            name: "Kimiko Tanaka",
            fatherName: "Hiroshi Tanaka",
            motherName: "Hana Yoshida",
            gender: "Female",
            dateOfBirth: "11-01-1950",
            birthCity: "Tokyo",
            birthCountry: "Japan",
            status: "discharged"
        },
        {
            id: 15,
            name: "Hans Schmidt",
            fatherName: "Fritz Schmidt",
            motherName: "Greta Muller",
            gender: "Male",
            dateOfBirth: "04-07-1982",
            birthCity: "Berlin",
            birthCountry: "Germany",
            status: "recovered"
        }

    ]);

    const [image, setImage] = useState(null);
    const handleAddPhoto = () => {
        console.log('Photo added:', image);
    };


    const [pagination, setPagination] = useState({ current: 1, pageSize: 6 }); // Set initial pagination values
    const handleTableChange = (pagination) => {
        setPagination(pagination); // Update pagination state when user interacts with the table
    };
    const [filteredData, setFilteredData] = useState(data); // Set initial data to be displayed in the table

    const handleSearch = (value) => {
        const filteredData = data.filter((record) => {
            const name = record.patient.name.toLowerCase();
            const patientId = record.patient.patientId.toLowerCase();
            return name.includes(value.toLowerCase()) || patientId.includes(value.toLowerCase());
        }
        );
        setFilteredData(filteredData);
    }


    const predictedResults = [
        {
            probability: 0.85,
            confidence: 'High',
            dateTime: '2024-04-01 10:30 AM',
            eegImage: 'https://example.com/eeg1.jpg',
            diagnosis: 'ASD',
            notes: 'Patient exhibits behavioral traits consistent with ASD.',
            patientId: '123456',
        }
    ];

    const steps = [
        {
            title: 'Upload Image',
            content: (
                <div className='my-5'>
                    {/* Upload Image and Show */}
                    <Form.Item
                        label="Document Image"
                        name="documentImage"
                    >
                        <div className="">
                            {!image ? <label className="bg-primary p-2 flex justify-center items-center text-white rounded-md cursor-pointer">
                                Upload Image
                                <input
                                    style={{ display: "none" }}
                                    type="file"
                                    name="images"
                                    onChange={(e) => setImage(e.target.files[0])}
                                    accept="image/*"
                                />
                            </label> :
                                <span onClick={() => setImage(null)} className="bg-red-500 p-2 flex justify-center items-center text-white rounded-md cursor-pointer">
                                    Delete Image
                                </span>

                            }
                            <img width={500} className="mx-auto"
                                src={
                                    image
                                        ? URL.createObjectURL(image)
                                        : ``
                                } alt="" />

                        </div>

                        <div className='mt-2'>
                            <div className='font-bold'>Note:</div>
                            <div>Once Image is uploaded then click on Continue to See the predicted Results</div>
                        </div>
                    </Form.Item>

                </div>
            ),
        },
        {
            title: 'View Results',
            content: (
                <div className='my-5'>
                    <Card title="Predicted Results for ASD by EEG Image Model" className=" mx-auto">
                        <div className="mb-4">
                            <h1 className="text-2xl font-semibold">Predicted Results</h1>
                            {predictedResults.map((result, index) => (
                                <div key={index} className="mt-4">
                                    <h2 className="text-lg font-semibold">Result {index + 1}</h2>
                                    <p className="mt-2">ASD Probability: {result.probability}</p>
                                    <p className="mt-2">Confidence Level: {result.confidence}</p>
                                    <p className="mt-2">Date and Time: {result.dateTime}</p>
                                    <Divider />
                                    <div className="flex items-center justify-between">
                                        
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2">Additional Information</h3>
                                            <p className="mb-2">Predicted Diagnosis: {result.diagnosis}</p>
                                            <p className="mb-2">Doctor's Notes: {result.notes}</p>
                                            <p className="mb-2">Patient ID: {result.patientId}</p>
                                            {/* You can display more information here as needed */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            ),
        },
        {
            title: 'Save Document',
            content: (
                <div className='my-5'>
                    <Form.Item
                            label="Patient ID"
                            name="patientId"
                            rules={[{ required: true, message: 'Please select patient ID!' }]}
                        >
                            <Select
                                showSearch
                                placeholder="Select Patient ID"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                                onChange={(value) => {
                                    const selectedPatient = allPatients.find(patient => patient.id === value);
                                    if (selectedPatient) {
                                        form.setFieldsValue({ name: selectedPatient.name });
                                    }
                                }}
                            >
                                {allPatients.map(patient => (
                                    <Option key={patient.id} value={patient.id}>{patient.id}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please select patient name!' }]}
                        >
                            <Select
                                showSearch
                                placeholder="Select Patient Name"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                                onChange={(value) => {
                                    const selectedPatient = allPatients.find(patient => patient.name === value);
                                    if (selectedPatient) {
                                        form.setFieldsValue({ patientId: selectedPatient.id });
                                    }
                                }}
                            >
                                {allPatients.map(patient => (
                                    <Option key={patient.id} value={patient.name}>{patient.name}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="Comment" name="comment">
                            <Input placeholder="Comment" />
                        </Form.Item>
                    <Form.Item
                        label="Document Type"
                        name="documentType"
                        rules={[{ required: true, message: 'Please select the document type!' }]}
                    >
                        <Select
                            placeholder="Select Document Type"
                            allowClear
                            style={{ width: '100%' }}
                        >
                            <Option value="Prescription">Prescription</Option>
                            <Option value="Lab Report">Lab Report</Option>
                            <Option value="Referral">Referral</Option>
                            <Option value="Discharge Summary">Discharge Summary</Option>
                            <Option value="Progress Notes">Progress Notes</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                            rules={[{ required: true, message: 'Please add document format!' }]}
                            label="Document" name="documentFormat">
                            <Input disabled placeholder="Document Format" />
                        </Form.Item>
                    <Form.Item
                        label="Document Name"
                        name="fileName"
                        rules={[{ required: true, message: 'Please enter the document name!' }]}
                    >
                        <Input
                            placeholder="Enter Document Name"
                            value={fileName}
                            disabled
                        />
                    </Form.Item>
                </div>
            ),
        },
    ];

    return (
        <div className="sm:m-9 m-2">
            <div className='flex justify-between bg-gray-100 items-center p-2 mb-2 rounded-md'>
                <h1 className="text-2xl font-semibold text-center text-primary ">Patient's Predicted Documents</h1>
                <Button
                    type="primary"
                    icon={<IoAdd />}
                    className="bg-primary"
                    onClick={() => setIsModalOpen(true)}
                >
                    Add Document
                </Button>
            </div>
            <div className="flex justify-between items-center mt-4">
                <Search
                    placeholder="Search..."
                    allowClear
                    onSearch={handleSearch}
                    style={{ width: 300 }}
                />
            </div>
            <div className="container mx-auto my-8">
                <Table
                    className='table-responsive'
                    showHeader={true}
                    size='middle'
                    columns={columns}
                    dataSource={filteredData}
                    pagination={{
                        ...pagination,
                        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                        showSizeChanger: true,
                        pageSizeOptions: ['5', '10', '20', '50']
                    }}
                    onChange={handleTableChange}
                />
            </div>

            <Modal
                centered
                // hide the close button
                closeIcon={null}
                width={800}
                footer={null}
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
            >
                <Form className='form'
                    layout='vertical'
                    form={form}>
                    <div className='flex justify-between bg-gray-100 items-center p-2 mb-2 rounded-md'>
                        <h1 className="text-2xl font-semibold text-center text-primary ">Add Document with Prediction</h1>
                        <Button
                            type="primary"
                            className="bg-primary"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <RxCross1 />
                        </Button>
                    </div>
                    <Steps current={currentStep} >
                        {steps.map((step) => (
                            <Step key={step.title} title={step.title} />
                        ))}
                    </Steps>
                    <div>{steps[currentStep].content}</div>
                    <div className='customContainer' style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between' }}>
                        {currentStep > 0 ? (
                            <Button style={{ marginRight: '8px' }} onClick={handlePrev}>
                                Previous
                            </Button>
                        ) : (<Button style={{ marginRight: '8px', visibility: "hidden" }}>
                            Previous
                        </Button>)}
                        {currentStep < steps.length - 1 && (
                            <Button type="primary" onClick={handleNext}>
                                Continue
                            </Button>
                        )}
                        {currentStep === steps.length - 1 && (
                            <Button type="primary" onClick={handleSubmit}>
                                Save Document
                            </Button>
                        )}
                    </div>
                </Form>
            </Modal>

        </div>
    )
}

export default PredictedDocuments
