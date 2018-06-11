function refreshServerinfo() {	
	const req = new XMLHttpRequest();

	req.addEventListener('load', function() {
		let data;
		try {
			const resp = this.responseText; 
			data = JSON.parse(resp || 'error');				
		}
		catch(e){
			console.log(`Error in json. ${e}`);
			data = 'undefined';
		}
		// console.log(data);
		const tableInfo = document.getElementById('tableInfo');
					
		const serverInfo = document.querySelector('.serverInfo');
		if (data != 'undefined') {			
			const db = data['data'];
			db.forEach(itm => {
				const child = document.createElement('div');
				child.textContent = `${itm.name} - ${itm.age}. ${itm.occupation.join(', ')}`;
				tableInfo.appendChild(child);
			});						
		}
	});

	req.open('GET', 'http://localhost:8080', true);
	req.send();
}

refreshServerinfo();