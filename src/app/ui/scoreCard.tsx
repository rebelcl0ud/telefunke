export default function ScoreCard() {
    // take name
    // buys
    // score
    return (
        <div className="flex">
            <div className="md:p-6">
                <p>player 1</p>
                <div className="flex justify-between">
                    <p>6</p>
                    <p>0</p>
                </div>
            </div>
            <div className="flex items-center md:mx-48 rounded-full md:p-10">
                <p>1-4</p>
            </div>
            <div className="md:p-6">
                <p>player 2</p>
                <div className="flex justify-between">
                    <p>6</p>
                    <p>42</p>
                </div>
            </div>
        </div>
    );
}
