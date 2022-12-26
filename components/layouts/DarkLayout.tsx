
const DarkLayout = ({ children }:any) => {
    return (
        <div
            style={{
                backgroundColor: 'rgba(0,0,0,0.3)',
                borderRadius: '10px',
                padding: '20px',
            }}
        >
            <h1>Dark Layout</h1>
            {children}
        </div>
    )
}

export default DarkLayout