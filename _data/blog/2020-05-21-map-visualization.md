---
template: BlogPost
path: /MapViz
date: 2020-05-21T20:21:09.023Z
title: Map Visualization
metaDescription: >-
  I designed and prototyped a data visualization system for geographic data, as
  part of my internship at Kodak. I was asked to create a system that allowed
  users to filtered explore the landscape of the data.
thumbnail: /assets/map_30fps.svg
---
### Project Type:WebDev, UI Design, UX Design

### Date:July 10-17, 2019

### Technologies:Javascript, PHP, CSS, HTML

I designed an interactive visualization that would map a large dataset and allow my supervisors to explore and filter the information.

## The Challenge

### Mapping Data

As part of my internship at Kodak, I was given a large dataset and asked to make a map that showed all the data. It was important that this data could be filtered by specific categories in order to show the landscape of the market.

## The Data

### Data Formatting

This data was the result of market research to view business within a certain field of production. Initially it only included the city and country name so in order to visualize it I needed to geocode it so it could be visualized on a map. I also had to decide what information from the data would be represented by a component of the design.

![a table with categories: company name, year of establishment, employee count, headquarters and location](/assets/data.png "Project Data")

## The Process

### Interviewing and sketching.

I conducted short interviews with my supervisor to get an idea of what he wanted then provided him with sketches. This showed the initial layout and few brief ideas of how to visualize the data. My supervisor provided the following design requirements:

> A panel that shows more information about a specific datum when selected
>
> The ability to filter by attribute
>
> The ability to select multiple attributes

![a sketch of the layout with notes from my supervisor](/assets/notes.jpg "Sketch of the Design")

### The Code

This project was made through the google maps api which allows you to visualize data and create custom markers and information frames. A key part of the coding was creating a filtering system. Because I did not have a lot of time to write many IF AND statements, I decided to use an array to hold all the data that matched a selected category and filter out data as more categories were selected as filters. This is in lieu of filtering and visualizing the points each time a selection is made. A snippet of the code for this filtering and array is included here.

```javascript
function filterall(){
		if(document.getElementById("eCFilter1").checked){
			filterSize('0-50');
		}
		if(document.getElementById("eCFilter2").checked){
			filterSize('51-200 ');
		}
		if(document.getElementById("eCFilter3").checked){
			filterSize('201-1,000 ');
		}
		if(document.getElementById("eCFilter4").checked){
			filterSize('1000+ ');
		}
		if(document.getElementById("eCFilter5").checked){
			showAllSize();
		}
	}
	
	function filterSize(sizeDemo,category){
		var instanceMarkers = [];
		var blerp = (sizeDemo);
		
		
	   if(category == 'EmployeeCount'){
		for(var i=0; i<selectedMarkers.length; i++) {
			if(selectedMarkers[i].employeeCount == blerp){
				selectedMarkers[i].setIcon({
					path: google.maps.SymbolPath.CIRCLE,
					scale: selectedMarkers[i].icon.scale,
					fillColor: selectedMarkers[i].icon.fillColor,
					fillOpacity: 0.8,
					strokeWeight: 0.8,
					strokeColor: "#333333",
					
				})
				selectedMarkers[i].setVisible(true)
			 	instanceMarkers.push(selectedMarkers[i]);
				
				
				
			}else{
			selectedMarkers[i].setIcon({
					path: google.maps.SymbolPath.CIRCLE,
					scale: selectedMarkers[i].icon.scale,
					fillColor: selectedMarkers[i].icon.fillColor,
					fillOpacity: 0.01,
					strokeWeight: 0.01,
					strokeColor: "#000000",
					
				})
			selectedMarkers[i].setVisible(false)
			
			}
		}
		selectedMarkers=instanceMarkers.slice(0,125);
			
	   }
		......
	function showAllSize(){
		selectedMarkers = markersArray.slice(0,125);
		for(var i=0; i<selectedMarkers.length; i++) {
			
				selectedMarkers[i].setIcon({
					path: google.maps.SymbolPath.CIRCLE,
					scale: selectedMarkers[i].icon.scale,
					fillColor: "#FF4C00",
					fillOpacity: 0.8,
					strokeWeight: 0.8,
					strokeColor: "#000000",
				})
			selectedMarkers[i].setVisible(true)
			
			
		}

	}
```

## Bringing It All Together

### The Design

This project brought to life the sketches that I made with my supervisor. I was able to create a UI that dynamically change the content on the side-panel when a data-point was tapped or clicked. The data could also be filtered by several categories and each category of data was mapped to an aesthetic property of the points (Production Type = Color, Employee Count = Size)

![a preview of the mapping program showing a set of data visualized](/assets/preview.png "Preview of the Product")

#### [Try It Yourself](https://liamarcherkiniry.github.io/MapDataViz/)

## Reflection

In this project I was able to use many of the HCI practices I learned in class in a professional setting to create a project that could actually be used. I was able to make a project my own and show the value of what I've learned.
