const display = document.getElementById("display");

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        
        if (value === "AC") {
            display.value = "0";
        }
        
        else if (value === "CE") {
            display.value = display.value.slice(0, -1);
            if (display.value === "") display.value = "0";
        }
        
        else if (value === "=") {
            try {
                display.value = eval(display.value.replace("X", "*"));
            } catch (error) {
                display.value = "Error";
            }
        }
    
        else if (value === "%") {
            try {
               
                display.value = eval(display.value) / 100;
            } catch (error) {
                display.value = "Error";
            }
        }
        
        else {
            if (display.value === "0" || display.value === "Error") {
                display.value = value === "X" ? "*" : value;
            } else {
                display.value += value === "X" ? "*" : value;
            }
        }
    });
});
