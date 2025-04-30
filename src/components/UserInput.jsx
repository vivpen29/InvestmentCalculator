export default function UserInput({outputData}) {
    function handleChange(event) {
        const {name, value} = event.target;
        outputData((prev) => {
                return {
                    req: {
                        ...prev.req,
                        [name]: value
                    }
                }
        })
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required name="initialInvestment" onBlur={handleChange}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required name="annualInvestment" onBlur={handleChange}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required name="interestRate" onBlur={handleChange}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required name="duration" onBlur={handleChange}/>
                </p>
            </div>
        </section>
    );
}