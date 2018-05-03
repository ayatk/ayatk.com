<app>
  <div class="wrapper">
    <div class="container">
      <h1>{ title }</h1>
      <p>{ message }</p>
      <links></links>
    </div>
  </div>

  <script>
    import './components/links.tag'

    this.title = "(´・ω・｀)やあ";
    this.message = '以下のリンクのどれかを選ぶとええぞ…';
  </script>

  <style>
    .wrapper .container {
      max-width: 80rem;
    }

    .container {
      padding-bottom: 7.5rem;
      padding-top: 7.5rem;
    }
  </style>
</app>
