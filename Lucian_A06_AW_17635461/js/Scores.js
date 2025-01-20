$(document).ready(() => {
    const names = ["ben, smith"];
    const score = [88];

    const clearBoxes = () => {
        $("#firstName").val("");
        $("#lastName").val("");
        $("#score").val("");
        $("#arrayScores").val("");
        names.length = 0;
        score.length = 0;
    }

    const addToArray = () => {
        let lastName = $("#lastName").val();
        let firstName = $("#firstName").val();
        let myName = lastName + ", " + firstName;
        let myScore = $("#score").val();
        let isvalid = false;

        if (lastName == "" || firstName == "" || isNaN(myScore) || myScore == null ) {
            isvalid = false;
        }
        else {
            names.push(myName);
            score.push(parseFloat(myScore));
            isvalid = true;
        }
        $("#firstName").val("");
        $("#lastName").val("");
        $("#score").val("");

        displayScore();
    }

    const sort = () => {
        let data = [];
        for (let i = 0; i < names.length; i++) {
            data.push({name: names[i], score: score[i]})
        }

        data.sort((a, b) => {
            const lastNameA = a.name.split(',')[0].trim();
            const lastNameB = b.name.split(',')[0].trim();

            if (lastNameA < lastNameB) return -1;
            if (lastNameA > lastNameB) return 1;
            return 0;
        })

        let sortedScoresText = "";
        $.each(data, function(index, value) {
            sortedScoresText += value.name + ": " + value.score + "\n";
        })

        $("#arrayScores").val(sortedScoresText);
    }

    const displayScore = () => {
        let scoreText = "";

        for (let i = 0; i < score.length; i++) {
            scoreText += `${names[i]}: ${score[i]}\n`;
        }
        $("#arrayScores").val(scoreText);
    }

    $("#studentScore").click(addToArray);
    $("#ClearStudent").click(clearBoxes);
    $("#SortByLast").click(sort);



})