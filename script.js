var schemaData = [
    { name: "Jou Doe", dob: "21-03-1991", favorite_animals: ["cat", "dog"] },
    { name: "Ivan Deshek", dob: "24-04-2005", favorite_animals: ["dog"] },
    { name: "Denis Xevin", dob: "12-06-1951", favorite_animals: ["cat"] },
    { name: "Jak Baed", dob: "02-09-1961", favorite_animals: ["cat", "rabbit"] },
    { name: "Lolla Nekson", dob: "14-01-1971", favorite_animals: ["rabbit", "dog"] },
    { name: "Mariya Arroka", dob: "21-12-1981", favorite_animals: ["cat", "dog", "rabbit"] }
];
filter(["cat"],{from: 2, to: 60});

function filter(pets = [], age = {}) {

    let filterResult = schemaData, result = [];
    let count = 0, arrayLength = pets.length;

    if (pets) {
        filterResult = schemaData.filter(function (value) {
            value.favorite_animals.forEach(function (el) {
                if(pets.includes(el)){
                    count++
                }
            });
            if(count === arrayLength){
                count = 0;
                return true;
            }else{
                count = 0;
                return false;
            }
        })
    }

    if (age) {
        filterResult.forEach(function (value) {
            let old = parseInt(moment(value.dob, 'dd-mm-yyyy').fromNow(true))
            if(age.from < old && age.to > old){
                let nameToArray = value.name.split(' ');
                result.push({'first_name':nameToArray[0],'last_name': nameToArray[1],'age': old,
                    'favorite_animals': value.favorite_animals})
            }
        });
        console.log(result)
        return result;
    }
}
