let data = [
    {
        id: 1,
        question: "Co to jest?",
        answer: "Jest to pierwszy projekt z wykorzystaniem React'a. Pierwsze kroki, które miały zdecydować czemu używać właśnie go."
    }, {
        id: 2,
        question: "Na czym to polega?",
        answer: "Chodziło o prostą komunikację między klientem, a operatorem. Czy to w postaci FAQ, który właśnie używam do przedstawienia wizji projektu, system mailowego czy czatu do pomocy w czasie rzeczywistym."
    }, {
        id: 3,
        question: "Czy ma backend?",
        answer: "Niestety, ale na ten moment wykracza to po za moje umiejętności. Plik json jest zapisywany w LocalStorage, dzięki czemu mogłem współgrać stronę klienta z operatorem."
    }, {
        id: 4,
        question: "Czy można to popsuć?",
        answer: "Oczywiście, jako, że jest to moje pierwsze podejście do reacta, to nawet na pewno jest wiele rzeczy, które mogą się popsuć. Podobnie jak jest wiele rzeczy, które można by zmienić/zaimplementować, by było to bardziej 'realne' jednak wraz ze zdobywaną wiedzą pewnie nie tylko bym przepisał ten kod, ale wręcz napisał go od nowa."
    }, {
        id: 5,
        question: "Czemu chcę to pokazać?",
        answer: "Ponieważ uważam, że przedstawienie progresu jest równie ważne co efekt końcowy. Szczególnie w przypadku kogoś takiego, jak ja, który braki w doświadczeniu nadrabia zapałem i szybkością nauki. Dodatkowo jest to moja osobista motywacja. Świadomość tego, jak bardzo zmienił się mój kod, sposoby rozwiązywania problemów i użycie najnowszych praktyk."
    }, {

        id: 6,
        question: "Dlaczego to tak brzydko wygląda?",
        answer: "Ponieważ nie był to cel tego tworu. CSS jest dodany dla przejrzystości, a nie by zachwycać. W celu oglądania czegoś ładnego zapraszam do innych projektów :) "


    }


]

let questionList = JSON.stringify(data)

export default questionList