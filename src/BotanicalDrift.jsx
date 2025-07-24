import './BotanicalDrift.css'

function BotanicalDrift() {

    return (
        <>
            <div className="falling-area">
                <div className="petal falling" style="--i:0;"></div>
                <div className="petal falling" style="--i:1;"></div>
                <div className="petal falling" style="--i:2;"></div>
            </div>

            <div className="accumulated-pile"></div>
        </>
    )
}

export default BotanicalDrift