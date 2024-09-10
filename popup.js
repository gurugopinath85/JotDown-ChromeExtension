document.getElementById('save').addEventListener('click', () => {
    const note = document.querySelector('textarea').value;

    // Create a blob 
    const blob = new Blob([note], { type: 'text/plain' });

    // Create a link element for download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'note.txt';

    // Append the link to the body (not visible to the user)
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert('Note saved and downloaded to file!');
});

