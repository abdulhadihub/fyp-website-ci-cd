import { LuLayoutDashboard } from 'react-icons/lu';
import { AiOutlineInfoCircle, AiOutlineUser} from 'react-icons/ai';
const items = [
    {
        to: 'dashboard',
        label: 'Dashboard',
        icon: <LuLayoutDashboard size={25} />,
        subnavs: [],
    },
    {
        to: 'document-library',
        label: 'Document Library',
        icon: <AiOutlineInfoCircle size={25} />,
        subnavs: [
            {
                to: 'predicted-documents',
                label: 'Predicted Documents',
                icon: <AiOutlineInfoCircle size={1} />,
            },
            // {
            //     to: 'other-documents',
            //     label: 'Other Documents',
            //     icon: <AiOutlineInfoCircle size={1} />,
            // }
        ],
    },
    {
        to: 'student-list',
        label: 'Patient Record',
        icon: <AiOutlineUser size={25} />,
        subnavs: [
            {
                to: 'add-patient',
                label: 'Add New Patient',
                icon: <AiOutlineUser size={1} />,
            },
            {
                to: 'patient-list',
                label: 'List of Patients',
                icon: <AiOutlineUser size={1} />,
            }
        ],
    },
];




export { items };
