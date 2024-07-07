const Avatar = ({ name }) => {
    const avatarStyle = {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#F2F4F7', 
        fontFamily: 'Inter, sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px', 
        fontWeight: '600',
        color: '#E44848', 
    };

    const initials = name.charAt(0).toUpperCase(); 

    return (
        <div style={avatarStyle}>
            {initials}
        </div>
    );
};

export default Avatar;
