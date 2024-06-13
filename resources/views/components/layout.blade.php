<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-100">
<x-head></x-head>
<body class="h-100">
{{ $slot }}
@vite(['resources/ts/app.ts'])
</body>
</html>
