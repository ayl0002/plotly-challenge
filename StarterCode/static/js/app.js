// Use d3.json() to fetch data from JSON file
var belly_data = "samples.json"
// Incoming data is internally referred to as incomingData

//function to slice data and build new JSON object
function getPlot(id) {
  d3.json(belly_data).then((data)=> {
      // console.log(data);

      var wash_f = data.metadata.map(d => d.wfreq);
      console.log(`Washing Freq: ${wash_f}`);

      var id_data = {};

      var id_data = data.samples;

      // console.log(id_data);
      
      var id_names = []     

      // var id_names = data.samples.map(d => d.id)
      // console.log(`id: ${id_names}`)

      function appendIDs(otus) {
        var d = []
        for (var i = 0; i < otus.length; i++) {
          d.push(otus[i].id);};
      return d;              
      };
    
      function appendOtu(otus) {
        var e = []
        e_sliced = []
        for (var i = 0; i < otus.length; i++) {
          e.push(otus[i].otu_ids);};

        for (var i = 0; i < e.length; i++) {
          e_sliced.push(e[i].slice(0, 10));}; 

      return e_sliced;              
      };

      function appendValues(otus) {
        var f = []
        f_sliced = []
        for (var i = 0; i < otus.length; i++) {
          f.push(otus[i].sample_values);};

        for (var i = 0; i < f.length; i++) {
          f_sliced.push(f[i].slice(0, 10));};   
      return f_sliced;              
      };

      id_names = appendIDs(id_data);

      otu_list = appendOtu(id_data);

      values_list = appendValues(id_data);
     
      console.log(id_names);
      console.log(otu_list);   
      console.log(values_list);


// var finalobj1 = {};
// var finalarray1 = [];

// for(var i = 0; i < id_names.length; i++)
// finalobj1  = [otu_list[i]] = values_list[i];
// finalarray1[i] = finalobj1.foreach()    
       
//     console.log(finalarray1)
        
      });
    };

      getPlot(belly_data); 
