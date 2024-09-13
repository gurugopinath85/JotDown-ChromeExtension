document.getElementById('save').addEventListener('click', () => {
    const note = document.querySelector('textarea').value;

    // Create a blob 
    const blob = new Blob([note], { type: 'text/plain' });
    // blobs are "a Binary Large Object, which is a data type that stores large amounts of binary data in databases or cloud storage"

    // Create a link element
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'note.txt';

    // Append the link to the body 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert('Note saved and downloaded to file!');
});

