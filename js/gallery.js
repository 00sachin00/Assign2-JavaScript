document.addEventListener('DOMContentLoaded', () => {
  const images = [
      { full: 'images/flowers-pink-large.jpg', thumb: 'images/flowers-pink-small.jpg', description: 'Pink Flowers', color: '#e4007c ' },
      { full: 'images/flowers-red-large.jpg', thumb: 'images/flowers-red-small.jpg', description: 'Red Flowers', color: '#FF0000' },
      { full: 'images/flowers-white-large.jpg', thumb: 'images/flowers-white-small.jpg', description: 'White Flowers', color: '#F5F5F5' },
      { full: 'images/flowers-purple-large.jpg', thumb: 'images/flowers-purple-small.jpg', description: 'Purple Flowers', color: '#800080' },
      { full: 'images/flowers-yellow-large.jpg', thumb: 'images/flowers-yellow-small.jpg', description: 'Yellow Flowers', color: '#FFFF00' }
  ];

  let currentIndex = 0;
  const featuredImage = document.getElementById('featured');
  const caption = document.getElementById('caption');
  const thumbnailsList = document.getElementById('thumbnails');

  // Function to set the active thumbnail
  const setActiveThumbnail = (index) => {
      document.querySelectorAll('#thumbnails img').forEach((thumbnail, i) => {
          thumbnail.classList.toggle('active', i === index);
      });
  };

  // Function to load thumbnails dynamically
  const loadThumbnails = () => {
      images.forEach((image, index) => {
          const li = document.createElement('li');
          const img = document.createElement('img');
          img.src = image.thumb;
          img.alt = `Thumbnail ${index + 1}`;
          img.addEventListener('click', () => {
              currentIndex = index;
              updateFeaturedImage();
          });
          li.appendChild(img);
          thumbnailsList.appendChild(li);
      });
  };

  // Function to update the featured image and caption color
  const updateFeaturedImage = () => {
      const currentImage = images[currentIndex];
      featuredImage.src = currentImage.full;
      caption.textContent = currentImage.description;
      featuredImage.style.borderColor = currentImage.color;
      caption.style.color = currentImage.color;
      setActiveThumbnail(currentIndex);
  };

  // Function to show the previous image
  const showPreviousImage = () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateFeaturedImage();
  };

  // Function to show the next image
  const showNextImage = () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateFeaturedImage();
  };

  // Event listeners for arrow navigation
  document.getElementById('prev').addEventListener('click', showPreviousImage);
  document.getElementById('next').addEventListener('click', showNextImage);

  // Load thumbnails and set the initial featured image
  loadThumbnails();
  updateFeaturedImage();
});
