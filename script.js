var dictionary = [];
var number = 0;

function addWordInDictionary() {
	$('#message').hide();
	$('#input').append(`
		<div class="input-group mb-3"  id="add">
  			<input type="text" class="form-control" placeholder="Enter a sigle word!" id="wordInput" aria-describedby="button-addon2">
  			<button class="btn btn-secondary" type="button" onclick="addWordInList();">Add</button>
		</div>
		`)
	$('#addWord').hide();
	return false;
}

function addWordInList() {
	var check = document.getElementById("wordInput").value;
	if (check.length == 0) {
		alert("Please enter a word!");
		return false;
	} else if (!isNaN(check)) {
		alert("The word contains numbers!");
		return false;
	}
	dictionary[number] = $('#wordInput').val();
	++number;
	$('#addWord').show();
	$('#add').remove();
	document.getElementById("searchW").style.visibility = "visible";
	return false;
}

function searchWord() {
	$('#message').hide();
	$('#search').append(`
		<div class="input-group mb-3" id="searchWord">
  			<input type="text" class="form-control" placeholder="Enter a sigle word!" id="wordSearch" aria-describedby="button-addon2">
  			<button class="btn btn-secondary" type="button" onclick="printMessage(searchWordInDictionary());">Search</button>
		</div>
		`)
	document.getElementById("searchW").style.visibility = "hidden";
	return false;
}

function searchWordInDictionary() {
	document.getElementById("searchW").style.visibility = "visible";
	var checkWord = $('#wordSearch').val();
	for (var i = 0; i < dictionary.length; ++i) {
		if (dictionary[i].localeCompare(checkWord) === 0) {
			$('#searchWord').remove();
			return "The word exists in the dictionary"
		}
	}
	$('#searchWord').remove();
	return "Sorry, this word does not exist in dictionary"
}

function printMessage(message) {
	$('#message').show();
	return document.getElementById("message").innerHTML = message;
}