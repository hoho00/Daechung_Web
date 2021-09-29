const Header = () => {
    return (
        <div style={header}>
            <h1 style={{ fontSize: '29px', display: 'inline-flex' }}>댐 주변 청결지킴이 관리자 페이지</h1>
        </div>
    )
}
export default Header;

const header = {
    background: 'transparent linear-gradient(90deg, #00B9ED 0%, #005596 100%) 0% 0% no-repeat padding-box',
    height: '70px', width: '100%',
    justifyContent: 'start',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '70px',
    color: 'white'
}