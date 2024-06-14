<?php

namespace App\Http\Controllers;

use App\Models\Person;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Class PersonController
 * @package App\Http\Controllers
 * @author MARIANI Matthieu <devmattmar@gmail.com>
 */
class PersonController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Person::all());
    }

    /**
     * store a person
     * @param Request $request
     * @return JsonResponse
     * @author MARIANI Matthieu <devmattmar@gmail.com>
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'min:3' ,'max:255'],
        ]);

        try {
            Person::create([
                'name' => $validated['name'],
            ]);

            return response()->json(['success' => 'Successfully created!']);

        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
    }

    /**
     * edit a person
     * @param Request $request
     * @param Person $person
     * @return JsonResponse
     * @author MARIANI Matthieu <devmattmar@gmail.com>
     */
    public function edit(Request $request, Person $person): JsonResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
        ]);

        try {

            $person->update([
                'name' => $validated['name'],
            ]);

            return response()->json(['success' => 'Successfully edited!']);

        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
    }

    /**
     * delete a person
     * @param Person $person
     * @return JsonResponse
     * @author MARIANI Matthieu <devmattmar@gmail.com>
     */
    public function destroy(Person $person): JsonResponse
    {
        try {

            $person->delete();

            return response()->json(['success' => 'Successfully deleted!']);

        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()]);
        }

    }
}
