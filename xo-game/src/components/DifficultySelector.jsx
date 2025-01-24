const DifficultySelector = ({ difficulty, setDifficulty }) => {
    return (
        <div className="difficulty-selector">
            <label>
                Difficulty:
                <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </label>
        </div>
    );
};

export default DifficultySelector;