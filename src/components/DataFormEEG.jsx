import React, { useState, useEffect } from 'react'
import { Form, Input, Select, DatePicker, Button, Row, Col } from 'antd'
import Papa from 'papaparse'
import axios from 'axios'



const EEGFieldsLeft = [
    {
        label: "Delta",
        name: "delta_F_sx"
    },
    {
        label: "Theta",
        name: "theta_F_sx"
    },
    {
        label: "Low Alpha",
        name: "low_alpha_F_sx"
    },
    {
        label: "High Alpha",
        name: "high_alpha_F_sx"
    },
    {
        label: "Beta",
        name: "beta_F_sx"
    },
    {
        label: "Gamma",
        name: "gamma_F_sx"
    }
]

const EEGFieldsRight = [
    {
        label: "Delta",
        name: "delta_F_dx"
    },
    {
        label: "Theta",
        name: "theta_F_dx"
    },
    {
        label: "Low Alpha",
        name: "low_alpha_F_dx"
    },
    {
        label: "High Alpha",
        name: "high_alpha_F_dx"
    },
    {
        label: "Beta",
        name: "beta_F_dx"
    },
    {
        label: "Gamma",
        name: "gamma_F_dx"
    }
]


function InputDataForm() {
    const [form] = Form.useForm()
    const [data, setData] = useState({ "Patient_ID": "045" })
    const [loading, setLoading] = useState(false)
    const [prediction, setPrediction] = useState(-1)

    const groupOptions = [
        { label: 'No Family History with ASD', value: 0 },
        { label: 'Family History with ASD', value: 2 }
    ]

    const ageOptions = [
        { label: 'Less than a year old', value: 1 },
        { label: 'Year old or older', value: 2 }
    ]


    const handleInputChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const handleFileInputChange = (e) => {
        const file = e.target.files[0]
        Papa.parse(file, {
            header: true,
            complete: (result) => {
                console.log(result.data[0])
                setData(result.data[0])
            }
        })
    }


    const handlePrediction = async () => {
        try {
            console.log("Data to be predicted:", data)
            console.log('Predicting')
            setLoading(true)
            const res = await axios.post("http://localhost:5000/predict", data);
            setPrediction(res.data.predicted_class[0])
            setLoading(false)
            console.log(prediction)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        form.setFieldsValue(data)
    }, [data])


    return (
        <div className='my-3'>
            <div className='flex flex-col my-3'>
                <label htmlFor="file" className="text-primary font-bold">Import EEG Data</label>
                <input type="file" accept=".csv" onChange={handleFileInputChange} />
            </div>

            <div className='flex justify-between bg-gray-100 items-center p-2 mb-2 rounded-md'>
                <h1 className="text-2xl font-semibold text-center text-primary ">Add Patient EEG Data</h1>
            </div>

            <Form
                layout="vertical"
                form={form}
                onFinish={handlePrediction}
            >
                <div className='mx-auto my-5 w-[200px] h-[50px]'>
                    <Button type="primary" htmlType="submit" block> Predict </Button>
                    {loading && <p className="text-center">Predicting...</p>}
                    {prediction >= 0 && <p className="text-center font-bold">Predicted class: <br /> {prediction == 2 ? "Highly likely ASD" : "Standard Developement"}</p>}
                </div>


                <Row gutter={16}>
                    <Col xs={24} sm={12}>
                        <Form.Item
                            label="Patient ID"
                            name="patientID"
                        >
                            <Input name='patient_ID' defaultValue={data["Patient_ID"]} onChange={handleInputChange} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                        {/* <Form.Item
                            label="Date"
                            name="date"
                        >
                            <DatePicker name='Date' style={{ width: '100%' }} />
                        </Form.Item> */}
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={12}>
                        <Form.Item
                            label="Group"
                            name="group"
                            rules={[{ required: true, message: 'Please enter group' }]}
                        >
                            <Select name='Group' options={groupOptions} defaultValue={data["Group"]} onChange={(value) => setData({ ...data, "Group": value })} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Form.Item
                            label="Age at the time of EEG recording"
                            name="age"
                            rules={[{ required: true, message: 'Please enter age' }]}
                        >
                            <Select name='Age' options={ageOptions} defaultValue={data["Time_point"]} onChange={(value) => setData({ ...data, "Time_point": value })} />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col xs={24} sm={24} md={12} >
                        <h3 className='text-2xl font-semibold text-center text-primary'>Left Cluster</h3>

                        {EEGFieldsLeft.map((field, index) => {
                            return (
                                <Form.Item
                                    label={field.label}
                                    name={field.name}
                                    rules={[{ required: true, message: 'Please enter data' }]}
                                    key={field.name}
                                >
                                    <Input name={field.name} value={data[field.name] || ""} onChange={handleInputChange} />
                                </Form.Item>
                            )
                        })
                        }
                    </Col>
                    <Col xs={24} sm={24} md={12} className='bg-slate-100 rounded-md'>
                        <h3 className='text-2xl font-semibold text-center text-primary'>Right Cluster</h3>
                        {EEGFieldsRight.map((field, index) => {
                            return (
                                <Form.Item
                                    label={field.label}
                                    name={field.name}
                                    rules={[{ required: true, message: 'Please enter data' }]}
                                    key={field.name}
                                >
                                    <Input name={field.name} value={data[field.name] || ""} onChange={handleInputChange} />
                                </Form.Item>
                            )
                        })
                        }
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default InputDataForm