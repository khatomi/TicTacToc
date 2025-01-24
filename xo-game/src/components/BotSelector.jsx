const BotSelector = ({ isBot, setIsBot }) => {
    return (
        <div className="bot-selector">
            <label>
                <input
                    type="checkbox"
                    checked={isBot}
                    onChange={(e) => setIsBot(e.target.checked)}
                />
                Play against Bot
            </label>
        </div>
    );
};

export default BotSelector;