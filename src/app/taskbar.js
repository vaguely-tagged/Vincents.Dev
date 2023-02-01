export default function Taskbar(){

    let barStyle = {
        backgroundColor: "white",
        height: "50px",
        width: "100%",
        borderBottomColor: "#CFCFCF",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid"

    }

    let lineStyle = {
        height: "1px",
        width: "30px",
        backgroundColor: "black"
    }

    let gridStyle = {
        display: "grid",
        gridTempleRows: "1fr 1fr 1fr 1fr",
        float: "right",
        height: "50px",
        position: "absolute",
        right: "0%",
        top: "0%",
        padding: "5px",
        paddingRight: "20px"
    }

    return (
        <div>
            <div style={barStyle}></div>

            <div style={gridStyle}>
                <div></div>
                <div style={lineStyle}></div>
                <div style={lineStyle}></div>
                <div></div>
            </div>
        </div>
    )
}