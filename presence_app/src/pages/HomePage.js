import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserDashboard from '../components/user/UserDashboard';
import GroupDashboard from '../components/group/GroupDashboard';
import InstitutionDashboard from '../components/institution/InstitutionDashboard';
import StudentDashboard from '../components/student/StudentDashboard';

const host = 'http://localhost:3000/';

const UserHomepage = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getUser = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${host}/user`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setUser(response.data);
        } catch (err) {
            setError("Problems encountered during authentication");
            console.log("Invalid token", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>{error}</div>;
    }
    if (!user) {
        return <div>No user data available</div>;
    }

    switch (user.role) {
        case 'student':
            return <StudentDashboard />;
        case 'teacher':
            return <GroupDashboard />;
        case 'institution':
            return <InstitutionDashboard />;
        default:
            return <UserDashboard />;
    }
};

export default UserHomepage;
