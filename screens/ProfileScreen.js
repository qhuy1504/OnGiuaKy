import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileScreen = ({ route, navigation }) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const { user } = route.params || 'Không tìm thấy user';

    const handleChangePassword = async () => {
        try {
            const response = await axios.put('http://192.168.2.144:3000/reset-password', {
                username: user.username,
                password: newPassword,
            });
            if (response.status === 200 && user.password === oldPassword)  {
                alert('Đổi mật khẩu thành công');
                navigation.navigate('Login');
            } else if (response.status === 200 && user.password !== oldPassword) {
                alert('Mật khẩu cũ không đúng, vui lòng nhập lại');
               
            } 
            else {
                alert('Đổi mật khẩu thất bại: ');
            }
            
        } catch (e) {
            console.error(e);
            alert('Đã xảy ra lỗi trong quá trình đổi mật khẩu.');
        }
    };

    const handleLogout = () => {
        // Xóa dữ liệu người dùng hoặc token nếu cần thiết
        navigation.navigate('Login'); // Quay về màn hình đăng nhập
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <Text style={styles.label}>Change Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Old Password"
                secureTextEntry
                value={oldPassword}
                onChangeText={setOldPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="New Password"
                secureTextEntry
                value={newPassword}
                onChangeText={setNewPassword}
            />
            <Button title="Submit" onPress={handleChangePassword} />

            <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    label: { fontSize: 18, marginBottom: 10 },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15 },
    logoutButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        borderRadius: 5,
    },
    logoutText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default ProfileScreen;
