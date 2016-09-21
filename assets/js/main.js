var hockeyApp = {};
hockeyApp.geoUrl = 'https://www.mapquestapi.com/geocoding/v1/address';
hockeyApp.geoKey = 'SbWOLqxKLnv7gxaIBRbvUMMF9M0KS6cA';
// hockeyApp.geoKey = 'RNRZNndoBDG4MS0SllzdUgQqqakeaC6n';
hockeyApp.teams = [
	{
		'name': 'Anaheim Ducks',
		'abbrev': 'ANA',
		'shortName': 'Ducks',
		'baseColor': '#000000',
		'accentColor': '#F57D31'
	},
	{
		'name':'Arizona Coyotes',
		'abbrev': 'ARI',
		'shortName': 'Coyotes',
		'baseColor': '#98012E',
		'accentColor': '#EEE3C7'
	},
	{
		'name': 'Boston Bruins',
		'abbrev': 'BOS',
		'shortName': 'Bruins',
		'baseColor': '#000000',
		'accentColor': '#FDB930'
	},
	{
		'name':'Buffalo Sabres',
		'abbrev': 'BUF',
		'shortName': 'Sabres',
		'baseColor': '#002D62',
		'accentColor': '#FDB930'
	},
	{
		'name': 'Carolina Hurricanes',
		'abbrev': 'CAR',
		'shortName': 'Hurricanes',
		'baseColor': '#E51A38',
		'accentColor': '#FFFFFF'
	},
	{
		'name':'Calgary Flames',
		'abbrev': 'CGY',
		'shortName': 'Flames',
		'baseColor': '#CB0D0D',
		'accentColor': '#FDBF12'
	},
	{
		'name': 'Chicago Blackhawks',
		'abbrev': 'CHI',
		'shortName': 'Blackhawks',
		'baseColor': '#C60C30',
		'accentColor': '#FFFFFF'
	},
	{
		'name': 'Columbus Blue Jackets',
		'abbrev': 'CBJ',
		'shortName': 'Blue Jackets',
		'baseColor': '#002147',
		'accentColor': '#C60C30'
	},
	{
		'name':'Colorado Avalanche',
		'abbrev': 'COL',
		'shortName': 'Avalanche',
		'baseColor': '#822433',
		'accentColor': '#165788'
	},
	{
		'name':'Dallas Stars',
		'abbrev': 'DAL',
		'shortName': 'Stars',
		'baseColor': '#016F4A',
		'accentColor': '#A7A8AC'
	},
	{
		'name': 'Detroit Red Wings',
		'abbrev': 'DET',
		'shortName': 'Red Wings',
		'baseColor': '#E51837',
		'accentColor': '#FFFFFF'
	},
	{
		'name':'Edmonton Oilers',
		'abbrev': 'EDM',
		'shortName': 'Oilers',
		'baseColor': '#013E7F',
		'accentColor': '#EB6E1E'
	},
	{
		'name': 'Florida Panthers',
		'abbrev': 'FLA',
		'shortName': 'Panthers',
		'baseColor': '#C51230',
		'accentColor': '#002D62'
	},
	{
		'name':'Los Angeles Kings',
		'abbrev': 'LAK',
		'shortName': 'Kings',
		'baseColor': '#000000',
		'accentColor': '#B2B7BB'
	},
	{
		'name': 'Minnesota Wild',
		'abbrev': 'MIN',
		'shortName': 'Wild',
		'baseColor': '#004F30',
		'accentColor': '#EEE3C7'
	},
	{
		'name':'Montreal Canadiens',
		'abbrev': 'MTL',
		'shortName': 'Canadiens',
		'baseColor': '#C51230',
		'accentColor': '#083A81'
	},
	{
		'name': 'Nashville Predators',
		'abbrev': 'NSH',
		'shortName': 'Predators',
		'baseColor': '#FDBB30',
		'accentColor': '#002D62'
	},
	{
		'name':'New Jersey Devils',
		'abbrev': 'NJD',
		'shortName': 'Devils',
		'baseColor': '#E03A3E',
		'accentColor': '#000000'
	},
	{
		'name': 'New York Islanders',
		'abbrev': 'NYI',
		'shortName': 'Islanders',
		'baseColor': '#00529B',
		'accentColor': '#F57D31'
	},
	{
		'name':'New York Rangers',
		'abbrev': 'NYR',
		'shortName': 'Rangers',
		'baseColor': '#0161AB',
		'accentColor': '#E51837'
	},
	{
		'name': 'Ottawa Senators',
		'abbrev': 'OTT',
		'shortName': 'Senators',
		'baseColor': '#E51837',
		'accentColor': '#D4A00F'
	},
	{
		'name':'Philadelphia Flyers',
		'abbrev': 'PHI',
		'shortName': 'Flyers',
		'baseColor': '#F4793E',
		'accentColor': '#000000'
	},
	{
		'name': 'Pittsburgh Penguins',
		'abbrev': 'PIT',
		'shortName': 'Penguins',
		'baseColor': '#000000',
		'accentColor': '#C5B358'
	},
	{
		'name':'San Jose Sharks',
		'abbrev': 'SJS',
		'shortName': 'Sharks',
		'baseColor': '#007889',
		'accentColor': '#F4901E'
	},
	{
		'name':'St Louis Blues',
		'abbrev': 'STL',
		'shortName': 'Blues',
		'baseColor': '#004F30',
		'accentColor': '#EEE3C7'
	},
	{
		'name': 'Tampa Bay Lightning',
		'abbrev': 'TBL',
		'shortName': 'Lightning',
		'baseColor': '#003D7C',
		'accentColor': '#000000'
	},
	{
		'name':'Toronto Maple Leafs',
		'abbrev': 'TOR',
		'shortName': 'Maple Leafs',
		'baseColor': '#013E7F',
		'accentColor': '#FFFFFF'
	},
	{
		'name':'Vancouver Canucks',
		'abbrev': 'VAN',
		'shortName': 'Canucks',
		'baseColor': '#003E7E',
		'accentColor': '#008852'
	},
	{
		'name': 'Washington Capitals',
		'abbrev': 'WSH',
		'shortName': 'Capitals',
		'baseColor': '#C60C30',
		'accentColor': '#002147'
	},
	{
		'name':'Winnipeg Jets',
		'abbrev': 'WPG',
		'shortName': 'Jets',
		'baseColor': '#002D62',
		'accentColor': '#006EC8'
	}
]

hockeyApp.worldCup = [
	['Patrice Bergeron', 'Logan Couture', 'Sidney Crosby', 'Matt Duchene', 'Ryan Getzlaf', 'Claude Giroux', 'Brad Marchand', 'Corey Perry', 'Tyler Seguin', 'Steven Stamkos', 'John Tavares', 'Jonathan Toews', 'Joe Thornton'],
	[]
];
// console.log(hockeyApp.teams)

hockeyApp.getPlayerStats = function(team) {
	$.ajax({
		url: 'https://proxy.hackeryou.com',
		method: 'GET',
		format: 'json',
		data: {
			reqUrl: `http://nhlwc.cdnak.neulion.com/fs1/nhl/league/playerstatsline/20152016/2/${team}/iphone/playerstatsline.json`
		}
	}).then(function(playerStats) {
		// console.log(playerStats)
		// take string of goalie stats & break it up into an array, take string of stat categories & break it up into an array, then reduce to match up category with stat
		var goalieCategoriesArray = hockeyApp.stringToArray(playerStats.goalieCategories);
		var goaliesArray = [];
		hockeyApp.stringToArrayForEach(playerStats.goalieData, goaliesArray);
		var goalieResult = goaliesArray.map(function(goalie) {
			return goalie.reduce(function(result, field, index) {
				result[goalieCategoriesArray[index]] = field;
				return result
			}, {});
		});

		// take string of skater stats & break it up into an array, take string of stat categories & break it up into an array, then reduce to match up category with stat
		var skaterCategoriesArray = hockeyApp.stringToArray(playerStats.skaterCategories);
		var skatersArray = [];
		hockeyApp.stringToArrayForEach(playerStats.skaterData, skatersArray);
		var skaterResult = skatersArray.map(function(skater) {
			return skater.reduce(function(result, field, index) {
				result[skaterCategoriesArray[index]] = field;
				return result
			}, {});
		});

		// make one array out of goalie and skater stats
		hockeyApp.fullTeamArray = [];
		hockeyApp.makeFullTeamArray(skaterResult, hockeyApp.fullTeamArray);
		hockeyApp.makeFullTeamArray(goalieResult, hockeyApp.fullTeamArray);

		// format key value pair for number to be the same as the data that comes back from next API call, so I can match them up
		hockeyApp.fullTeamArray.forEach(function(item) {
			hockeyApp.renameKey(item, '#', 'number');
			item.number = Number(item.number);
			hockeyApp.renameKey(item, '+/-', 'plusMinus');
			hockeyApp.renameKey(item, 'TOI/G', 'timePerGame')
			hockeyApp.renameKey(item, 'SV%', 'savePercentage')
		});

		// pass team along to second API endpoint, to get personal info of players
		hockeyApp.getPlayerDetails(team);
	});
};

hockeyApp.getPlayerDetails = function(team) {
	$.ajax({
		url: 'https://proxy.hackeryou.com',
		method: 'GET',
		format: 'json',
		data: {
			reqUrl: `http://nhlwc.cdnak.neulion.com/fs1/nhl/league/teamroster/${team}/iphone/clubroster.json`
		}
	}).then(function(playerDetails) {
		// combine all types of players into one array
		hockeyApp.playerDetails = [];
		hockeyApp.makeFullTeamArray(playerDetails.defensemen, hockeyApp.playerDetails);
		hockeyApp.makeFullTeamArray(playerDetails.forwards, hockeyApp.playerDetails)
		hockeyApp.makeFullTeamArray(playerDetails.goalie, hockeyApp.playerDetails);
		// pass personal info of all players to geocoding API, to get plottable coords 
		hockeyApp.geocodePlayers(hockeyApp.playerDetails).then(function (geocodedPlayers) {
			// !!!! what does this do?
			hockeyApp.geocodedPlayers = geocodedPlayers;
		}).then(function() {
			hockeyApp.matchReturnData(hockeyApp.playerDetails, hockeyApp.fullTeamArray)
		});
		// hockeyApp.matchReturnData(hockeyApp.playerDetails, hockeyApp.fullTeamArray).then(function() {
		// 	hockeyApp.geocodePlayers(hockeyApp.playerDetails).then(function (geocodedPlayers) {
		// 		// !!!! what does this do?
		// 		hockeyApp.geocodedPlayers = geocodedPlayers;
		// 	})
		// });
		// combine personal info and statistics of each player into one object
		// hockeyApp.matchReturnData(hockeyApp.playerDetails, hockeyApp.fullTeamArray);
	});
};

// !!!! don't need this, I changed it to radio buttons!
// take user input and retrieve abbreviation to be passed into API call
// hockeyApp.getAbbrev = function(input) {
// 	selectedTeam = hockeyApp.teams.filter(function(value) {
// 		return value.name == input;
// 	});
// 	var teamAbbrev = selectedTeam[0].abbrev;
// 	hockeyApp.getPlayerStats(teamAbbrev);
// 	hockeyApp.customIcon(teamAbbrev);
// };

hockeyApp.stringToArray = function(string) {
	return string.replace(/\s/g, '').split(',');
};

hockeyApp.stringToArrayForEach = function(playerData, finalArray) {
	playerData.forEach(function(player) {
		var playerStatsArray = hockeyApp.stringToArray(player.data);
		finalArray.push(playerStatsArray);
	});
}

// !!!! not working but I'm not sure why
// hockeyApp.matchCategoriesToStats = function(playersArray, categoriesArray) {
// 	playersArray.map(function(player) {
// 		return player.reduce(function(result, field, index) {
// 			result[categoriesArray[index]] = field;
// 			return result
// 		}, {});
// 	});
// };

hockeyApp.makeFullTeamArray = function(positionArray, finalTeamArray) {
	positionArray.forEach(function(item) {
		finalTeamArray.push(item);
	});
};

hockeyApp.renameKey = function(obj, oldName, newName) {
    if(!obj.hasOwnProperty(oldName)) {
        return false;
    }

    obj[newName] = obj[oldName];
    delete obj[oldName];
    return true;
};

hockeyApp.geocodePlayers = function(playersArray) {
	return Promise.all(playersArray.map(function(player) {

		return new Promise(function (resolve, reject) {
			hockeyApp.getPlayerLocations(player.birthplace).then(function(playerLocations) {
			// flatten multiple nested arrays from geocode API to make it easier to map
				player.coords = $.map(playerLocations, function recurs(n) {
				    return ($.isArray(n) ? $.map(n, recurs): n);
				});

				resolve(player);
		    });
		});
	}));
};

hockeyApp.matchReturnData = function(playerDetails, fullTeamArray) {
	hockeyApp.playerResult = playerDetails.map(function (item) {
	  var match = fullTeamArray.find(function (item2) {
	    return item.number === item2.number;
	  });
	  
	  return {
	    item1: item,
	    item2: match
	  };
	}).filter(function(item) {
		return item.item1 && item.item2;
	})
	hockeyApp.playerResult.forEach(function(player){
		// console.log(player.item1.coords);
		hockeyApp.plotPlayerLocations(player);
		hockeyApp.findWorldCup(player);
	});
};

hockeyApp.findWorldCup = function(player) {
	console.log(player);
	hockeyApp.worldCup.forEach(function(team) {
		if( team.includes(player.item1.name) ) {
			player.item1.wcTeam = team;
		}
	});
}
// hockeyApp.geocodePlayer = function(playersArray) {
// 	hockeyApp.geocodedArray = playersArray.forEach(function(value) {
// 		value.coords = hockeyApp.findUser(value.birthplace);
// 		console.log(hockeyApp.playerDetails);
// 	});
// };

// console.log(hockeyApp.geocodedArray);

// hockeyApp.getPlayerLocations = function(birthplace) {
// 	$.ajax({
// 		url: hockeyApp.geoUrl,
// 		method: 'GET',
// 		inFormat: 'json',
// 		data: {
// 			key: hockeyApp.geoKey,
// 			location: birthplace
// 		}
// 	}).then(function(playerLocations) {
// 		return playerLocations.results.map(function(result) {
// 		    return result.locations.map(function(location) {
// 		    	return [location.latLng.lat, location.latLng.lng];
// 		    });
// 		});
// 	});
// };

 // hockeyApp.getPlayerLocations = function(birthplace) {
 // return Promise.resolve($.ajax({
 //       url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${birthplace}.json`,
 //       method: 'GET',
 // //       inFormat: 'json',
	// // 	query: birthplace,
 //       data: {
 // 			access_token: 'pk.eyJ1Ijoicm9zYWxlYWdhdXRoaWVyIiwiYSI6ImNpcmpiMHN3MjAwMWlmZm04NTR4cm02ZDYifQ.MKQSdvygxbrKPi35zfot6g'
 //     }
 // 	})).then(function(playerLocations) {
 // 		return playerLocations.features[0].center;
 // 	});
 // };

hockeyApp.getPlayerLocations = function(birthplace) {
return Promise.resolve($.ajax({
      url: hockeyApp.geoUrl,
      method: 'GET',
      inFormat: 'json',
      data: {
        key: hockeyApp.geoKey,
		maxResults: 1,
		thumbMaps: false,
        location: birthplace
    }
	})).then(function(playerLocations) {
		return playerLocations.results.map(function(result) {
		    return result.locations.map(function(location) {
			    return [location.latLng.lat, location.latLng.lng];
			});
		});
	});
};

hockeyApp.plotPlayerLocations = function(player) {
 	hockeyApp.marker = L.marker(player.item1.coords, {
		icon: hockeyApp.locationIcon, // the icon we created above
		title: player.item1.name, // some title text when we hover over the marker
		alt: `marker showing hometown of ${player.item1.name}`, // a fallback in case the image doesn't load
		draggable: false // we don't want to be able to move the marker around
	});

	hockeyApp.markerArray.push(hockeyApp.marker);
	hockeyApp.group = L.featureGroup(hockeyApp.markerArray);
	hockeyApp.map.addLayer(hockeyApp.group);
	hockeyApp.map.fitBounds(hockeyApp.group.getBounds());

	var name = player.item1.name;
	var birthplace = player.item1.birthplace;
	var coords = player.item1.coords;
	var id = player.item1.id;
	var position = player.item1.position;
	var template = `<div class="player-image">
				 		<img src="http://3.cdn.nhle.com/photos/mugs/${id}.jpg" alt="" />
				 	</div>
					<div class="player-info">
						<div class="player">${name}</div>
						<div class="position">${position}</div>
					 	<div class="hometown">${birthplace}</div>
					 </div>`;

	if(position === 'Goalie') {
		console.log(player)
		template = `${template}<div class="player-stats clearfix">
			<ul>
				<li><span>Wins</span><span>${player.item2.W}</span></li>
				<li><span>Losses</span><span>${player.item2.L}</span></li>
				<li><span>OT Losses</span><span>${player.item2.OT}</span></li>
				<li><span>Games Played</span><span>${player.item2.GP}</span></li>
			</ul>
			<ul>
				<li><span>Shots Against</span><span>${player.item2.SA}</span></li>
				<li><span>Saves</span><span>${player.item2.Sv}</span></li>
				<li><span>Save %</span><span>${player.item2.savePercentage}</span></li>
				<li><span>GAA</span><span>${player.item2.GAA}</span></li>
			</ul>
		</div>`;
	}else{
		template = `${template}<div class="player-stats clearfix">
			<ul>
				<li><span>Points</span><span>${player.item2.P}</span></li>
				<li><span>Goals</span><span>${player.item2.G}</span></li>
				<li><span>Assists</span><span>${player.item2.A}</span></li>
				<li><span>+/-</span><span>${player.item2.plusMinus}</span></li>
			</ul>
			<ul>
				<li><span>Games</span><span>${player.item2.GP}</span></li>
				<li><span>TOI/game</span><span>${player.item2.timePerGame}</span></li>
				<li><span>PIM</span><span>${player.item2.PIM}</span></li>
				<li><span>Shots</span><span>${player.item2.S}</span></li>
			</ul>
		</div>`;
	}

	hockeyApp.marker.bindPopup(template);
	hockeyApp.stopLoading();
};

hockeyApp.startLoading = function() {
	$('.loader').fadeIn();
};

hockeyApp.stopLoading = function() {
	$('.loader').fadeOut();
};

hockeyApp.scrollTo = function(elementId, offset, duration) {
	$('html, body').animate({
	    scrollTop: $("#mapid").offset().top
	}, 2000);
};

//map presets
hockeyApp.map = L.map('mapid', {
	scrollWheelZoom: false,

});

//Define a custom icon to use as a marker
hockeyApp.customIcon = function(abbrev) {
	hockeyApp.locationIcon = L.icon({
		iconUrl: `assets/images/${abbrev}-marker.svg`, // the image we want to use
		iconSize: [30, 30], // dimensions of the icon
		iconAnchor:   [15, 30], // point of the icon which will correspond to marker's location
		popupAnchor: [0, -25] // position of the popup relative to the icon
	});
};

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicm9zYWxlYWdhdXRoaWVyIiwiYSI6ImNpcmpiMHN3MjAwMWlmZm04NTR4cm02ZDYifQ.MKQSdvygxbrKPi35zfot6g', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 10,
}).addTo(hockeyApp.map);

//Define empty array to eventually push markers into
hockeyApp.markerArray = [];

hockeyApp.resetMap = function() {
	if(hockeyApp.group) {
		hockeyApp.group.clearLayers();
	};
	hockeyApp.markerArray = [];
};


hockeyApp.init = function() {
	$('input[type="radio"]').on('click', function() {
		hockeyApp.resetMap();
		hockeyApp.scrollTo('#mapid', 0, 2000)
		$('.loader-content .instructions').hide();
		$('.loader img').show();
		hockeyApp.startLoading();
		chosenTeam = $(this).val();
		// hockeyApp.getAbbrev(chosenTeam);
		hockeyApp.getPlayerStats(chosenTeam);
		hockeyApp.customIcon(chosenTeam);
	});
}; // init

$(function() {
	hockeyApp.teams.forEach(function(team){
		var label = team.name;
		var id = team.abbrev;
		var  shortName = team.shortName
		if ($(window).width() < 768 ) {
			$('form.enter-team').append(
				`<label for="${id}" style="background-color: ${team.baseColor}">
					${shortName}
					<input type="radio" id="${id}" name="teams" value="${id}" />
				</label>`
			);
		} else {
			$('form.enter-team').append(
				`<label for="${id}" style="background-color: ${team.baseColor}">
					${label}
					<input type="radio" id="${id}" name="teams" value="${id}" />
				</label>`
			);
		}
		
	});
	hockeyApp.init();
}); // doc ready