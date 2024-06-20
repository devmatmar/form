<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreatePersonRequest;
use App\Http\Requests\EditPersonRequest;
use App\Models\Person;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

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
     * @param CreatePersonRequest $request
     * @return JsonResponse
     * @author MARIANI Matthieu <devmattmar@gmail.com>
     */
    public function store(CreatePersonRequest $request): JsonResponse
    {
        $validated = $request->validated();

        try {
            $path = null;

            if ($request->hasFile('file')) {
                $path = $validated['file']->store('files', 'public');

                if ($path === false) {
                    return response()->json(['error' => 'File upload failed'], 500);
                }
            }

            $data = [
                "lastname" => $validated['lastname'],
                "firstname" => $validated['firstname'],
                "file" => $path,
            ];

            if (isset($validated['hash'])) {
                $data['lastname'] = Hash::make($validated['lastname']);
                $data['firstname'] = Hash::make($validated['firstname']);
                $data['hash'] = $validated['hash'];
            }

            Person::create($data);

            return response()->json(['success' => 'Successfully created!'], 201);

        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
    }


    /**
     * edit a person
     * @param EditPersonRequest $request
     * @param Person $person
     * @return JsonResponse
     * @author MARIANI Matthieu <devmattmar@gmail.com>
     */
    public function edit(EditPersonRequest $request, Person $person): JsonResponse
    {
        $validated = $request->validated();

        try {

            $data = [
                "lastname" => $validated['lastname'],
                "firstname" => $validated['firstname'],
            ];

            $person->update($data);

            return response()->json(['success' => 'Successfully edited!'], 201);

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

            if ($person->file) {
                unlink(storage_path('app/public/' . $person->file));
                $person->delete();
                return response()->json(['success' => 'File and data Successfully deleted!'], 201);
            }

            $person->delete();
            return response()->json(['success' => 'Successfully deleted!'], 201);

        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()]);
        }

    }
}
