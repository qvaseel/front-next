// Main Data Object
const formData = {
    slide1: "",
    slide2: "",
    slide3: "",
    slide4: "",
    mainInfo: { name: "", phone: "", email: "" },
};


const fileNameDisplay = document.getElementById("fileName");


function removeClass() {
    const clearButton = document.getElementById("clearButton")
    clearButton.addEventListener("click", function () {
        // Устанавливаем значение элемента input в null или ""
        fileInput.value = null // или fileInput.value = ""
        fileNameDisplay.innerHTML = `<img id="clearButton" class="invisible cursor-pointer w-[8px] h-[8px]" src="images/svg/cancel.svg" alt="cancel" />`
    })
    clearButton.classList.remove("invisible")
}

fileInput.addEventListener("change", function () {
    // Проверяем, был ли выбран файл
    if (fileInput.files.length < 2) {
        // Получаем название первого выбранного файла
        const fileName = fileInput.files[0]?.name;
        fileNameDisplay.innerHTML = `
                    <span class="font-normal text-[#525252] text-[15px]">${fileName}</span>
                    <img id="clearButton" class="invisible cursor-pointer w-[8px] h-[8px]" src="images/svg/cancel.svg" alt="cancel" />
                   
            `
        removeClass()
    } else {
        return fileNameDisplay.textContent = "Ни один файл не был выбран";
    }
})

//

//  Data Collecting
function collect_slide1() {
    const form = document.getElementById("slide1Form");
    const choice = form.querySelectorAll("input[name=choices]:checked");

    if (!choice[0]) {
        document.getElementById("slide1FillAll").classList = ["text-red-600"];
        return false;
    } else {
        formData.slide1 = choice[0].value;
        return true;
    }
}
const slide1Btn = document.getElementById("slide1BTN");
const slide1 = document.getElementById("send-form-slide1");
const slide2 = document.getElementById("send-form-slide2");

slide1Btn.addEventListener("click", (e) => {
    e.preventDefault();
    collect_slide1();
    if (collect_slide1()) {
        slide1.classList.toggle("slideHide");
        slide2.classList.toggle("slideHide");
    }
});



//
function collect_slide2() {
    const form = document.getElementById("slide2Form");
    const choice = form.querySelectorAll("input[name=choices]:checked");

    if (!choice[0]) {
        document.getElementById("slide2FillAll").classList = ["text-red-600"];
        return false;
    } else {
        formData.slide2 = choice[0].value;
        return true;
    }
}

const slide2Btn = document.getElementById("slide2BTN");
const slide3 = document.getElementById("send-form-slide3");

slide2Btn.addEventListener("click", (e) => {
    e.preventDefault();
    collect_slide2();
    if (collect_slide2()) {
        slide2.classList.toggle("slideHide");
        slide3.classList.toggle("slideHide");
    }
});

//
function collect_slide3() {
    const form = document.getElementById("slide3Form");
    // const choice = form.querySelectorAll('input[name=choices]:checked');
    // const data = form.getElementById('slide3TextArea').value
    const data = document.getElementById("slide3TextArea").value;

    if (data.length <= 0) {
        document.getElementById("slide3FillAll").classList = ["text-red-600"];
        return false;
    } else {
        formData.slide3 = data;
        return true;
    }
}

const slide3Btn = document.getElementById("slide3BTN");
const slide4 = document.getElementById("send-form-slide4");

slide3Btn.addEventListener("click", (e) => {
    e.preventDefault();
    collect_slide3();
    if (collect_slide3()) {
        slide3.classList.toggle("slideHide");
        slide4.classList.toggle("slideHide");
    } else {
    }
});

//

function collect_slide4() {
    const form = document.getElementById("slide4Form");
    const data = document.getElementById("slide4TextArea").value;

    if (data.length <= 0) {
        document.getElementById("slide4FillAll").classList = ["text-red-600"];
        return false;
    } else {
        formData.slide4 = data;
        return true;
    }
}

const slide4Btn = document.getElementById("slide4BTN");
const slideMain = document.getElementById("send-form-mainSlide");

slide4Btn.addEventListener("click", (e) => {
    e.preventDefault();
    collect_slide4();
    if (collect_slide4()) {
        slide4.classList.toggle("slideHide");
        slideMain.classList.toggle("slideHide");
    }
})


back2Btn = document.getElementById("back2Btn")
back3Btn = document.getElementById("back3Btn")
back4Btn = document.getElementById("back4Btn")
back5Btn = document.getElementById("back5Btn")

back2Btn.addEventListener("click", () => {
    slide2.classList.toggle("slideHide")
    slide1.classList.toggle("slideHide")
})

back3Btn.addEventListener("click", () => {
    slide3.classList.toggle("slideHide")
    slide2.classList.toggle("slideHide")
})

back4Btn.addEventListener("click", () => {
    slide4.classList.toggle("slideHide")
    slide3.classList.toggle("slideHide")
})

back5Btn.addEventListener("click", () => {
    slideMain.classList.toggle("slideHide")
    slide4.classList.toggle("slideHide")
})

//

function collect_Main() {
    const form = document.getElementById("mainSlideForm");
    const name = form.querySelectorAll("input")[0].value;
    const phone = form.querySelectorAll("input")[1].value;
    const email = form.querySelectorAll("input")[2].value;

    const nameFill = document.getElementById("mainSlideFillAll1");
    const phoneFill = document.getElementById("mainSlideFillAll2");
    const emailFill = document.getElementById("mainSlideFillAll3");
    name.length <= 0 ? null : (formData.mainInfo.name = name);
    phone.includes("_") ? null : (formData.mainInfo.phone = phone);
    email.length <= 0 ? null : (formData.mainInfo.email = email);


    if (name.length <= 0 || phone.includes("_") || email.length <= 0) {
        return false;
    } else {
        return true;
    }
}

const mainBtn = document.getElementById("mainSlideBtn");
const finalFormContent = document.getElementById("finalFormContent")
const contactForm = document.querySelector(".contactForm")


function removeContactFormBtns() {
    contactForm.style.height = 'auto'
    const back5Btn = document.querySelector("#back5Btn")
    const mainSlideBtn = document.querySelector("#mainSlideBtn")
    back5Btn.parentNode.removeChild(back5Btn)
    return mainSlideBtn.parentNode.removeChild(mainSlideBtn)
}


// Fetch to Send the data (POST: "/applications")
const sendFetch = async (Data) => {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0]

    function detectLanguage(filename) {
        if (/^[a-zA-Z0-9]+$/.test(filename)) {
            return 'English';
        } else {
            return 'Non-English'; // Здесь можно дополнительно анализировать символы для более точной оценки
        }
    }
    const formData = new FormData()

    let fileName = file?.name
    if (file) {
        const language = detectLanguage(file?.name)

        if (language === 'Non-English') {
            fileName = encodeURIComponent(fileName)
        }
        formData.append("file", file, file?.name)
    }

    formData.append("slide1", Data.slide1)
    formData.append("slide2", Data.slide2)
    formData.append("slide3", Data.slide3)
    formData.append("slide4", Data.slide4)
    formData.append("data", JSON.stringify(Data.mainInfo))

    const contentDispositionHeader = `attachment; filename="${fileName}"`;

    try {
        const result = await fetch('/application', {
            method: "POST",
            headers: {
                'Content-Disposition': contentDispositionHeader,
            },
            body: formData
        })
        const parsedResult = await result.json()
        removeContactFormBtns()
        finalFormContent.innerHTML =
            `
                        <div
                            style="margin-top:10px;"
                            class="flex justify-center py-[12px] px-[20px] items-center group relative z-10 rounded-xl bg-electric-violet  text-white transition-ct duration-300 ease-out hover:bg-[#4835c7]">
                            ${parsedResult?.message}
                        </div>
                    `




    } catch (e) {
        console.log(e)
    }
}



mainBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = form.querySelectorAll("input")[0].value;
    const phone = form.querySelectorAll("input")[1].value;
    const email = form.querySelectorAll("input")[2].value;

    const nameFill = document.getElementById("mainSlideFillAll1");
    const phoneFill = document.getElementById("mainSlideFillAll2");
    const emailFill = document.getElementById("mainSlideFillAll3");

    e.preventDefault();
    collect_Main();
    sendFetch(formData)
    if (collect_Main()) {
    } else {
        name.length <= 0
            ? (nameFill.classList = ["text-red-600"])
            : (nameFill.classList = ["non-visable"]);

        phone.includes("_")
            ? (phoneFill.classList = ["text-red-600"])
            : (phoneFill.classList = ["non-visable"]);

        email.length <= 0
            ? (emailFill.classList = ["text-red-600"])
            : (emailFill.classList = ["non-visable"]);
    }
});

// module.exports = formData;

