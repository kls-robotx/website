window.onload = function()
{
	/*[...document.getElementsByClassName('nav-item')].forEach(function(v)
	{
		v.onclick = function()
		{
			if(v.id === 'home'){document.getElementById('aboutuscontent').children[0].scrollIntoView({'behavior':'smooth'});}
			else
			{
				document.getElementById(v.id+'content').children[0].scrollIntoView
				({
					'behavior':'smooth'
				});
			}
		}
	});*/
		
	function changeVisibility(i)
	{
		[...document.getElementsByClassName('sect')].forEach(function(v)
		{
			v.style.visibility = 'hidden';
		});
		[...document.getElementsByClassName('sect')][i].style.visibility = 'visible';
	}

	let idx = 0;
	const frames = [...document.getElementsByClassName('sect')];
	setInterval(function()
	{
		idx = (idx + 1) % frames.length;
		changeVisibility(idx);
	},3000);
}
