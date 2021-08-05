function superbowlWin(array) {
	let result = array.find(W => "W" === W["result"])
	if (result === undefined) {
		return undefined
	}else {
		return result["year"]
	}	
}