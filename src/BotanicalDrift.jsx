import './BotanicalDrift.css'

function BotanicalDrift() {

    return (
        <>
            <div class="falling-area">
                <div class="petal falling" style="--i:0;"></div>
                <div class="petal falling" style="--i:1;"></div>
                <div class="petal falling" style="--i:2;"></div>
            </div>

            <div class="accumulated-pile"></div>
        </>
    )
}

export default BotanicalDrift