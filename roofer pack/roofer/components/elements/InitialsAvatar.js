
export default function InitialsAvatar({ name }) {
    const initial = name ? name.charAt(0).toUpperCase() : "";
    return (
        <div style={{
            width: '65px',
            height: '65px',
            backgroundColor: 'var(--theme-color)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '30px',
            fontWeight: 'bold',
            overflow: 'hidden'
        }}>
            {initial}
        </div>
    );
}
