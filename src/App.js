import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleToggle = (e) => {
		const allC = Array.from(e.target.parentNode.parentNode.classList);

		if (allC.includes("active")) {
			e.target.parentNode.parentNode.classList.remove("active");
		} else {
			e.target.parentNode.parentNode.classList.add("active");
		}

		console.log(e.target.parentNode.parentNode);
	};

	return (
		<div className="app-wrapper">
			<Dialog visible={isModalOpen} onHide={() => setIsModalOpen(false)}>
				<div className="modal-wrapper">
					<div className="accordion active">
						<h3 className="accordion-title">Why shouldn't we trust atoms?</h3>
						<p className="accordion-text">They make up everything</p>

						<button className="accordion-toggle" onClick={handleToggle}>
							<i className="fas fa-chevron-down"></i>
							<i className="fas fa-times"></i>
						</button>
					</div>
					<div className="accordion">
						<h3 className="accordion-title">Why shouldn't we trust atoms?</h3>
						<p className="accordion-text">They make up everything</p>

						<button className="accordion-toggle" onClick={handleToggle}>
							<i className="fas fa-chevron-down"></i>
							<i className="fas fa-times"></i>
						</button>
					</div>
					<div className="accordion">
						<h3 className="accordion-title">Why shouldn't we trust atoms?</h3>
						<p className="accordion-text">They make up everything</p>

						<button className="accordion-toggle" onClick={handleToggle}>
							<i className="fas fa-chevron-down"></i>
							<i className="fas fa-times"></i>
						</button>
					</div>
					<div className="accordion">
						<h3 className="accordion-title">Why shouldn't we trust atoms?</h3>
						<p className="accordion-text">They make up everything</p>

						<button className="accordion-toggle" onClick={handleToggle}>
							<i className="fas fa-chevron-down"></i>
							<i className="fas fa-times"></i>
						</button>
					</div>
				</div>
			</Dialog>
			<Button label="Abrir Popup" onClick={() => setIsModalOpen(true)} />
		</div>
	);
}

export default App;
