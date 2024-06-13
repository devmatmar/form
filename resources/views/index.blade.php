<x-layout>
    <react-handler data-component="{{ $comp }}" data-config="{{ $data }}" class="h-100 d-flex flex-column justify-content-between"></react-handler>
    @viteReactRefresh
    @vite(['resources/ts/react.tsx', 'resources/ts/app.ts'])
</x-layout>
