import React, { useState } from 'react';


const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
	const totalPages = Math.ceil(totalItems / itemsPerPage);
	const [currentPage, setCurrentPage] = useState(1);
	const handlePageClick = (page) => {
		setCurrentPage(page);
		onPageChange(page);
	};
	const generatePageNumbers = () => {
		const pageNumbers = [];
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(
				<>
					<span>

						<a
							// class="paginate_button current"
							key={i}
							href="#"
							// style={currentPage === i ? 'red' : 'green'}
							onClick={() => handlePageClick(i)}
						>
							{i}
						</a>
					</span>

				</>
			);
		}
		return pageNumbers;
	};
	const startIndex = (currentPage - 1) * itemsPerPage + 1;
	const endIndex = Math.min(currentPage * itemsPerPage, totalItems);
	return (
		<>
			<div style={{  }}>    Showing {startIndex} to {endIndex} of {totalItems} entries
			</div><div ><a><i></i></a><span>
				
			{generatePageNumbers()}
				
				</span><a ><i ></i></a>

			</div>
		</>)
}

export default Pagination;
