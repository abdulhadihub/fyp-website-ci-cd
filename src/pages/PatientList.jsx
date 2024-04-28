import React, { useState } from 'react'
import { Space, Table, Avatar, Tag, Input, Button, Select } from 'antd';
import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { IoAdd } from 'react-icons/io5';

const { Search } = Input;
const { Option } = Select;
const PatientList = () => {

    const navigate = useNavigate();
    //eslint-disable-next-line
    const [data, setData] = useState([
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


    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'FULL NAME',
            dataIndex: 'name',
            render: (_, record) => (
                <Space>
                    <span className='capitalize'>{record?.name}</span>
                </Space>
            ),
        },
        {
            title: 'FATHER NAME',
            dataIndex: 'fatherName',
            render: (_, record) => (
                <Space>
                    <span className='capitalize'>{record?.fatherName}</span>
                </Space>
            ),
        },
        {
            title: 'MOTHER NAME',
            dataIndex: 'motherName',
            render: (_, record) => (
                <Space>
                    <span className='capitalize'>{record?.motherName}</span>
                </Space>
            ),
        },
        {
            title: 'GENDER',
            dataIndex: 'gender',
            render: (_, { gender }) => (
                <div className='capitalize'>
                    {gender}
                </div>
            ),
        }, {
            title: 'DATE OF BIRTH',
            dataIndex: 'dateOfBirth',
            render: (_, { dateOfBirth }) => (
                <div className='capitalize'>
                    {dateOfBirth}
                </div>
            ),
        },
        {
            title: 'BIRTH PLACE',
            dataIndex: 'birthplace',
            render: (_, { birthCity, birthCountry }) => (
                <div className='capitalize'>
                    {birthCity}, {birthCountry}
                </div>
            ),
        },
        {
            title: 'STATUS',
            key: 'status',
            dataIndex: 'status',
            render: (status) => (
                <Tag
                    className='w-[100px] text-center capitalize'
                    color={status === 'recovered' ? '#82C43C' : status === 'discharged' ? '#81C58F' : status === 'Recovering' ? '#E7B73C' : status === 'admitted' ? '#FF8F50' : status === 'critical' ? "#AB0534" : '#91F58F'}>
                    {status}
                </Tag>
            )
        },
        {
            title: 'ACTION',
            key: "details",
            render: (_, record) => (
                <Space className='cursor-pointer'>
                    <AiOutlineEye onClick={() => moveToNextScreen(record?.id)} size={25} style={{ color: "grey" }} />
                </Space>
            ),
        }
    ];


    const moveToNextScreen = (id) => {
        navigate(`/patient/${id}`);
    }
    const [pagination, setPagination] = useState({ current: 1, pageSize: 6 }); // Set initial pagination values
    const [searchText, setSearchText] = useState('');
    const [filteredStatus, setFilteredStatus] = useState(null);
    const handleTableChange = (pagination) => {
        setPagination(pagination); // Update pagination state when user interacts with the table
    };
    const filteredData = data.filter(item => {
        return (
            (item.name.toLowerCase().includes(searchText.toLowerCase()) || item.fatherName.toLowerCase().includes(searchText.toLowerCase()) || item.mother.toLowerCase().includes(searchText.toLowerCase())) &&
            (!filteredStatus || item.status === filteredStatus)
        );
    });
    const handleSearch = (value) => {
        setSearchText(value); // Update search text state
    };

    const handleStatusFilter = (value) => {
        setFilteredStatus(value); // Update filtered status state
    };

    return (
        <div className="sm:m-9 m-2">
            <div className="container mx-auto">
                <div className='flex justify-between bg-gray-100 items-center p-2 mb-2 rounded-md'>
                    <h1 className="text-2xl font-semibold text-center text-primary ">Patient List</h1>
                    <Button
                        type="primary"
                        icon={<IoAdd />}
                        className="bg-primary"
                        onClick={() => navigate('/add-patient')}
                    >
                        Add Patient
                    </Button>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <Search
                        placeholder="Search..."
                        allowClear
                        onSearch={handleSearch}
                        style={{ width: 250 }}
                    />
                    <Select
                        placeholder="Filter by status"
                        style={{ width: 250 }}
                        onChange={handleStatusFilter}
                        allowClear
                    >
                        <Option value="admitted">Admitted</Option>
                        <Option value="recovered">Recovered</Option>
                        <Option value="discharged">Discharged</Option>
                        <Option value="critical">Critical</Option>
                        <Option value="stable">Stable</Option>
                    </Select>
                </div>
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
        </div>
    )
}

export default PatientList
