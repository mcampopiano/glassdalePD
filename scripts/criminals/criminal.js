export const CriminalHtml = (criminalArr) => {
    for (const criminal of criminalArr) {
        return `
        <div class="criminal-card">
        <h3>${criminal.name}</h3>
        <p>Age: ${criminal.age}</P>
        <p>Crime: ${criminal.conviction}</P>
        <p>Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</P>
        <p>Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</P>
        </div>
        `
    }
}