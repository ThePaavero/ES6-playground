<?php

// Just an example... Do what your framework wants you to do
$production = ! in_array($_SERVER['HTTP_HOST'], [
    'es6.dev',
    'localhost'
]);

?><!doctype html>
<html>
<head>
    <meta charset='utf-8'>
    <title>ES6 Test</title>
    <link rel='stylesheet' href='assets/css/main.css'/>
</head>
<body>
<h1>Hello</h1>
<script src='//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js'></script>
<?php if ($production): ?>
    <script src='build.js'></script>
<?php else: ?>
    <script src='jspm_packages/system.js'></script>
    <script src='config.js'></script>
    <script>
        System.import('main');
    </script>
<?php endif; ?>
</body>
</html>