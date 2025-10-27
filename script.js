function insert_Row() {
    //Write your code here
  const btn = document.querySelector('input');
	btn.addEventListener('click',()=>{
			const row = document.createElement('tr')
		const td1  = document.createElement('td')
		const td2  = document.createElement('td')
	 td1.textContent ="New Cell1"
	 td2.textContent ="New Cell2"
		row.appendChild(td1)
		row.appendChild(td2)
		document.querySelector('table').prepend(row)
		
		
		
})
  
		
}
 
