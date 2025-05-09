function mincost(arr)
{ 
let ans=0;
arr.sort((a,b)=>a-b);
while(arr.length>1)
	{
		let sum=arr[0]+arr[1];
		arr.shift();
		arr.shift();
		ans+=sum;
		arr.push(sum)
		arr.sort((a,b)=>a-b)
		
	}
	return ans;
  
}

module.exports=mincost;
